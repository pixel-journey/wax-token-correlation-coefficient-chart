import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Steps that point the same way',
  description: 'Two of three steps match. One is flat. This is not a correlation coefficient.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
