"use client";

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";
import { on } from "events";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Timer(props: { messages: any[]; idInterview: string }) {
  const [seconds, setSeconds] = useState(900);

  const { messages, idInterview } = props;
  const onPlis = () => {
    logout();
  };
  const user = useCurrentUser();
  const router = useRouter();

  const endpoint = `/api/chat/save/${idInterview}`;

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [seconds]);

  const handleButtonClick = async () => {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages }),
    });
    const data = await response;
    console.log(data);

    router.push("/user/result");
  };

  return (
    <div className="flex justify-start items-center">
      {/* <div>Time remaining: {seconds} seconds</div> */}
      <button
        onClick={onPlis}
        className="px-4 py-2 bg-destructive rounded text-white"
      >
        Logout
      </button>
      <p className="ml-auto m-2 font-semibold">{user?.name}</p>
      <button
        onClick={handleButtonClick}
        className="px-4 py-2 bg-yellow-500 rounded"
      >
        Selesai
      </button>
    </div>
  );
}
