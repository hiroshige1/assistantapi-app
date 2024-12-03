import "./globals.css";
import { ReactNode } from "react";
import Header from "./components/layout/Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="ja">
        <body>
          <Header />
          <main style={{ background: "#87ceeb", width: "100%", height: "1000vh" }}>
            {children}
          </main>
        </body>
      </html>
    </>
  );
}