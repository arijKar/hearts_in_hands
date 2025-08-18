import type { Metadata } from "next";
import "./globals.css";
import { fredoka, nunito } from "./fonts";

export const metadata: Metadata = {
  title: "Hearts In Hands",
  description: "Community-led support",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`}>
      <body className="font-body bg-beige text-darkOlive">{children}</body>
    </html>
  );
}
