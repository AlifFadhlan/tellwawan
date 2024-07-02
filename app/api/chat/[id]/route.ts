import { NextRequest, NextResponse } from "next/server";
import { Message as VercelChatMessage, StreamingTextResponse } from "ai";

import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { HttpResponseOutputParser } from "langchain/output_parsers";
import { getInterviewUserById } from "@/data/pelamar";

export const runtime = "nodejs";

const formatMessage = (message: VercelChatMessage) => {
  return `${message.role}: ${message.content}`;
};
const TEMPLATE_TEST = `Anda adalah seorang rekruter magang dari Perusahaan X. Tugas Utama Anda adalah menanyakan pertanyaan dan menggali informasi. Percakapan dimulai saat user mengirimkan pesan "halo", selain itu Anda tidak boleh mengirimkan pesan pertama.
Anda akan menanyakan beberapa pertanyaan kepada calon magang. Buat percakapan senyaman mungkin. Jangan membuat monolog. Anda hanya boleh bertanya 1 pertanyaan setiap kali Anda mengirimkan pesan. Jangan menyapa atau mengucapkan salam.
Pertanyaan Anda berpatokan pada daftar pertanyaan yang telah disediakan. Jika diperlukan, Anda dapat menambahkan pertanyaan tambahan yang relevan dengan konteks percakapan.
Berikut daftar pertanyaan yang akan Anda tanyakan, tanyakan secara berurutan dan jangan meloncati pertanyaan yang belum ditanyakan:
{question}
Jika seluruh pertanyaan telah ditanyakan, selesaikan percakapan dan berterima kasih serta menyuruh user untuk menekan tombol "Selesai".
Jika percakapan telah selesai, Anda hanya perlu berterima kasih dan menyuruh user untuk menekan tombol "Selesai".
Percakapan yang telah dilalui: {chat_history}
Gunakan percakapan yang telah dilalui sebagai informasi yang sudah Anda ketahui.
Contoh percakapan:
User: Halo
assistant: Bisakah kamu menyebutkan Nama, dan Asal kamu dari mana?
User: Saya Wawan, dari Jakarta

Sekarang giliran Anda bertanya.

User: {input}
AI:

`;

export async function POST(req: NextRequest) {
  try {
    const idInterview: string = req.url.split("/").pop() ?? "";
    const body = await req.json();
    const messages = body.messages ?? [];
    const interview = await getInterviewUserById(idInterview);
    const question = interview?.child.parent.question;
    const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);
    const currentMessageContent = messages[messages.length - 1].content;

    const prompt = PromptTemplate.fromTemplate(TEMPLATE_TEST);

    const model = new ChatOpenAI({
      temperature: 1,
      modelName: "gpt-3.5-turbo",
    });

    const outputParser = new HttpResponseOutputParser();

    const chain = prompt.pipe(model).pipe(outputParser);

    const stream = await chain.stream({
      chat_history: formattedPreviousMessages.join("\n"),
      input: currentMessageContent,
      question: question as string,
    });
    console.log(idInterview);
    return new StreamingTextResponse(stream);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: e.status ?? 500 });
  }
}
