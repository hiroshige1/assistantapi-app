import { useState } from "react";

type ChatFormProps = {
  func: (message: string) => void;
};

export default function ChatForm({ func }: ChatFormProps) {
  const [message, setMessage] = useState<string>("");

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    func(message);
    setMessage("");
  };

  return (
    <form
      onSubmit={handleForm}
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        padding: 20,
        background: "#fff",
      }}
    >
      <div style={{ display: "flex", gap: 10 }}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Aa"
          style={{
            width: "100%",
            padding: 10,
            borderRadius: 10,
            border: "1px solid #ccc",
          }}
        />
        <button type="submit" style={{ padding: "10px 20px", borderRadius: 10, background: "#006BD6", color: "white" }}>
          ＞
        </button>
      </div>
    </form>
  );
}