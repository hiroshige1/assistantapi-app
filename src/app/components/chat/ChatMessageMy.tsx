interface ChatMessageMyProps {
  message: string;
}

export default function ChatMessageMy({ message }: ChatMessageMyProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        justifyContent: "flex-end",
        marginTop: 20,
      }}
    >
      <div
        style={{
          padding: "10px 20px",
          marginTop: 5,
          background: "#98fb98",
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