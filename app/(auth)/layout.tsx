import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './globals.css'

export const metadata: Metadata = {
  title: "Amin Messenger Homepage",
  description: "Ein neuer Messenger, wo man miteinander chatten kann.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html className="bg-green-200" lang="de">
      <body>
        <header>
          <Navbar />
        </header>

        <main>{children}</main>

          <Footer />
        
      </body>
    </html>
  );
}
