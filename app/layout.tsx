import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retro Messenger UI",
  description: "復古即時通風格介面",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
