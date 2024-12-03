"use client";
import { useState } from "react";
import ChatForm from "./components/chat/ChatForm";
import ChatLog from "./components/chat/ChatLog";

export default function Home() {
  const [messages, setMessages] = useState<{ side: string; message: string }[]>([]);
  const [oppmessage, setOppMessage] = useState<string>("");
  const sendMessage = async (message: string) => {
    const response = await fetch("/api/openai",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    const data = await response.json();
    setOppMessage(data.message);
  };

  const addMessage = async (message: string) => {
    setMessages((messages) => [...messages, { side: "my", message }]);
    sendMessage(message);
    setMessages((messages) => [...messages, { side: "opp", message:oppmessage}]);
  };

  return (
    <>
      <ChatLog messages={messages} />
      <ChatForm func={addMessage} />
    </>
  );
}