import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yovra Yoga",
  description: "A mindful yoga landing page built with Next.js and React.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
