"use client";

import { Button } from "../../Components/ui/button";
import { Textarea } from "../../Components/ui/textarea";
import { SendHorizontal } from "lucide-react";
import { useState } from "react";

export default function ChatBox({ onSendMessage }) { 
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim()) {
      console.log("Message sent:", message); 
      onSendMessage(message); 
      setMessage("");
    }
  };

  return (
    <div className="flex items-end gap-2">
      <Textarea
        className="flex-1 resize-none border border-gray-300 rounded-md min-h-[100px] max-h-[150px] text-gray-800 placeholder-gray-400 focus:ring-1 focus:ring-blue-500"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        className="p-2 h-12 w-12 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        variant="outline"
        onClick={sendMessage}
      >
        <SendHorizontal className="h-5 w-5" />
      </Button>
    </div>
  );
}