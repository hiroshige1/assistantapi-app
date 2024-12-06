import type { NextConfig } from "next";
import dotenv from "dotenv";

// .envファイルから環境変数を読み込む
dotenv.config();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "doodleipsum.com",
      },
    ],
  },
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
};

export default nextConfig;

