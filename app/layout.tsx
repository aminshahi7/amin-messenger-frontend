import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Amin Messenger Homepage",
  description: "Ein neuer Messenger, wo man miteinander chatten kann.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de">
      <header>
        <h1>Hello</h1>
      </header>

      <body>{children}</body>

      <footer>
        <h1>Hello</h1>
      </footer>
    </html>
  );
}
