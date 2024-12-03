// ChatMessageOpp.tsx
interface ChatMessageOppProps {
  message: string;
}

export default function ChatMessageOpp({ message }: ChatMessageOppProps) {
  return (
    <div style={{ display: "flex", gap: 10 }}>
        <div
          style={{
            padding: "10px 20px",
            marginTop: 5,
            background: "#fff",
            borderRadius: 20,
            lineHeight: 1.0,
            height: "fit-content",
          }}
        >
          {message}
        </div>
    </div>
  );
}