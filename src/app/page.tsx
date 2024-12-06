"use client";
import { useState } from "react";
import ChatForm from "./components/chat/ChatForm";
import ChatLog from "./components/chat/ChatLog";

export default function Home() {
  const [messages, setMessages] = useState<{ side: string; message: string }[]>([]);
  const [threadId, setThreadId] = useState<string>("");
  const sendMessage = async (message: string) => {
    const response = await fetch("/api/ans",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message,threadId}),
    });
    const data = await response.json();
    setMessages((messages)=>[...messages,{side:"opp",message:data.message}]);
    setThreadId(data.threadId);
  };

  const addMessage = async (message: string) => {
    setMessages((messages) => [...messages, { side: "my", message }]);
    sendMessage(message);
  };

  return (
    <>
      <ChatLog messages={messages} />
      <ChatForm func={addMessage} />
    </>
  );
}