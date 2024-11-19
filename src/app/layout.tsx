import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global Solution",
  description: "Projeto Global Solution sobre Energia Sustentável",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
