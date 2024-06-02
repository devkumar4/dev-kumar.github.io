import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

const inter = Red_Hat_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Kumar",
  description: "This is my portfolio hope you like it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
