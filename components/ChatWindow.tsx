"use client";

import { useState } from "react";

export default function ChatWindow({ friend }: { friend: string }) {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  function send() {
    if (!input) return;

    setMessages([...messages, input]);
    setInput("");
  }

  return (
    <div className="flex flex-col flex-1">

      <div className="p-4 bg-purple-700">
        與 {friend} 聊天
      </div>

      <div className="flex-1 p-4 space-y-2 overflow-y-auto">

        {messages.map((m, i) => (
          <div key={i} className="bg-purple-500 px-3 py-2 rounded w-fit">
            {m}
          </div>
        ))}

      </div>

      <div className="p-4 flex gap-2">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 bg-purple-900 rounded"
        />

        <button
          onClick={send}
          className="bg-yellow-400 text-black px-4 rounded"
        >
          送出
        </button>

      </div>

    </div>
  );
}
