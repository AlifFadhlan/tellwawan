import { ChatWindow } from "@/components/chat/ChatWindow";
import React from "react";

const UserChat = () => {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-zinc-700 w-full max-h-[85%] overflow-hidden text-white">
      <h1 className="text-3xl md:text-4xl mb-4">Wawan the Interviewer 🤵</h1>
      <ul>
        <li className="text-l">
          1️⃣
          <span className="ml-2">
            Pastikan Anda berada di lingkungan yang kondusif.
          </span>
        </li>
        <li className="hidden text-l md:block">
          2️⃣
          <span className="ml-2">
            Pastikan internet Anda stabil dan baterai device Anda cukup.
          </span>
        </li>
        <li>
          3️⃣
          <span className="ml-2">
            Jawablah setiap pertanyaan dengan jujur dan tulus.
          </span>
        </li>
        <li className="hidden text-l md:block">
          4️⃣
          <span className="ml-2">
            Perhatikan waktu wawancara agar hasil wawancara dapat maksimal.
          </span>
        </li>
        <li className="text-l">
          5️⃣
          <span className="ml-2">
            Jika waktu sudah habis, klik tombol
            <span className="text-yellow-400"> Selesai</span> di pojok kanan
            atas.
          </span>
        </li>
        <li className="text-l">
          6️⃣
          <span className="ml-2">
            Saat Anda memulai wawancara, pesan ini akan hilang.
          </span>
        </li>
        <li className="text-l">
          👇
          <span className="ml-2">Ketik 'halo' untuk memulai wawancara.</span>
        </li>
      </ul>
    </div>
  );
  return (
    <>
      {/* <button className="fixed top-4 right-6 px-8 py-4 bg-yellow-500 rounded w-28">
        Selesai
      </button> */}
      <ChatWindow
        endpoint="api/chat/uiux"
        emoji="🤵"
        titleText="Wawan the Interviewer 🤵"
        placeholder="Ketik 'halo' untuk memulai wawancara."
        emptyStateComponent={InfoCard}
      ></ChatWindow>
    </>
  );
};

export default UserChat;
