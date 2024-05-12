import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const mono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Banana Card",
  description: "3D Pricing card using React Three Fiber",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mono.className}>{children}</body>
    </html>
  );
}
