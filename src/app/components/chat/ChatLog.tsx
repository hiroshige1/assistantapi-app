"use client";

import ChatMessageOpp from './ChatMessageOpp';
import ChatMessageMy from './ChatMessageMy';

type ChatLogProps = {
  messages: { side: string; message: string }[];
};

export default function ChatLog({ messages }: ChatLogProps) {
  return (
    <div style={{ padding: "30px 20px", height: "100%" }}>
      {messages.map((msg, index) => (
        msg.side === 'opp' ? (
          <ChatMessageOpp key={index} message={msg.message} />
        ) : (
          <ChatMessageMy key={index} message={msg.message} />
        )
      ))}
    </div>
  );
}