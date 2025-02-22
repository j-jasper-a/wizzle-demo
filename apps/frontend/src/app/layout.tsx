import type { Metadata } from "next";
import { Rubik as FontMain } from "next/font/google";
import "./globals.css";

const fontMain = FontMain({
  variable: "--font-main",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Wizzle",
  description: "Wizzle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontMain.variable} antialiased`}>{children}</body>
    </html>
  );
}
