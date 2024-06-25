import { NextRequest, NextResponse } from "next/server";
import { Message as VercelChatMessage, StreamingTextResponse } from "ai";

import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { HttpResponseOutputParser } from "langchain/output_parsers";

export const runtime = "edge";

const formatMessage = (message: VercelChatMessage) => {
  return `${message.role}: ${message.content}`;
};
const TEMPLATE_TEST = `Anda adalah seorang rekruter magang dari Perusahaan X. Tugas Utama Anda adalah menanyakan pertanyaan dan menggali informasi. Percakapan dimulai saat user mengirimkan pesan "halo", selain itu Anda tidak boleh mengirimkan pesan pertama.
Anda akan menanyakan beberapa pertanyaan kepada calon magang. Buat percakapan senyaman mungkin. Jangan membuat monolog. Anda hanya boleh bertanya 1 pertanyaan setiap kali Anda mengirimkan pesan. Jangan menyapa atau mengucapkan salam.
Pertanyaan Anda berpatokan pada daftar pertanyaan yang telah disediakan. Jika diperlukan, Anda dapat menambahkan pertanyaan tambahan yang relevan dengan konteks percakapan.
Berikut daftar pertanyaan yang akan Anda tanyakan, tanyakan secara berurutan dan jangan meloncati pertanyaan yang belum ditanyakan:
Bisakah kamu menyebutkan Nama, dan Asal kamu dari mana?
Mengapa kamu tertarik untuk bergabung dengan perusahaan kami sebagai magang?
Mengapa kamu memilih magang dalam bidang UI/UX desainer?
Apakah kamu pernah mengikuti pelatihan, lomba, atau terlibat dalam organisasi yang relevan dengan bidang magang yang kamu lamar?
Bagaimana kamu menilai keterampilan (Skill) yang kamu miliki saat ini? (1 Sangat Kurang, 2 Kurang, 3 Cukup, 4 Baik , 5 Mahir) 
Jika kamu sebagai anggota di dalam sebuah tim, Bagaimana cara kamu berkoordinasi dengan anggota tim lainnya?
Apakah pernah memiliki pengalaman desain UI/UX?
Apa alat (tools) atau perangkat lunak yang kamu kuasai dalam desain UI/UX?
Bagaimana cara kamu menganalisis kebutuhan pengguna dalam proses desain UI/UX kamu?
Bagaimana kamu memastikan konsistensi desain antara berbagai halaman atau fitur dalam sebuah aplikasi atau situs web?
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
    const body = await req.json();
    const messages = body.messages ?? [];
    const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);
    const currentMessageContent = messages[messages.length - 1].content;

    const prompt = PromptTemplate.fromTemplate(TEMPLATE_TEST);

    const model = new ChatOpenAI({
      temperature: 1,
      modelName: "gpt-3.5-turbo-1106",
    });

    const outputParser = new HttpResponseOutputParser();

    const chain = prompt.pipe(model).pipe(outputParser);

    const stream = await chain.stream({
      chat_history: formattedPreviousMessages.join("\n"),
      input: currentMessageContent,
    });
    console.log(messages);
    return new StreamingTextResponse(stream);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: e.status ?? 500 });
  }
}

// import { ChatOpenAI } from "@langchain/openai";
// import { RunnableSequence } from "@langchain/core/runnables";
// import { StringOutputParser } from "@langchain/core/output_parsers";

// const model = new ChatOpenAI({});

// const questionPrompt = PromptTemplate.fromTemplate(
//   "Ask the user about their work experience. Start with 'Can you tell me about your experience with...?'",
// );

// const chain = RunnableSequence.from([
//   {
//     input: "work_experience",
//     run: (input) => model.call(questionPrompt.format({ experience: input })),
//   },
//   new StringOutputParser(),
// ]);

// const result = await chain.invoke({ input: "software development" });
// console.log({ result });
