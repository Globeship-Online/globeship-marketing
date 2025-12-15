import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Globeship Online",
  description: "Canada’s first AI-powered shipping concierge.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
