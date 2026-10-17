import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Amin Messenger Homepage",
  description: "Ein neuer Messenger, wo man miteinander chatten kann.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
