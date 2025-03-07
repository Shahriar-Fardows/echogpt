"use client"; 

import ChatBox from "./Page/ChatBox/ChatBox";
import { Sidebar } from "./Page/Sidebar/Sidebar";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([]); 

  const handleSendMessage = (message) => {
    setMessages((prev) => [...prev, { text: message, id: Date.now() }]);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 flex-shrink-0 bg-white shadow-md">
        <Sidebar />
      </div>
      <main className="flex-1 flex flex-col">
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.length === 0 ? (
            <p className="text-gray-500 text-sm">No messages yet...</p>
          ) : (
            <ul className="space-y-2">
              {messages.map((msg) => (
                <li
                  key={msg.id}
                  className="text-gray-800 p-2 bg-white rounded-md shadow-sm "
                >
                  {msg.text}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="p-4 bg-white border-t border-gray-200">
          <ChatBox onSendMessage={handleSendMessage} />
        </div>
      </main>
    </div>
  );
}