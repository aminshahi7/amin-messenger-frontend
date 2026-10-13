import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amin Messenger Homepage",
  description: "Ein neuer Messenger, wo man miteinander chatten kann.",
};

export default function Home() {
  return (
    <main>
      <h1>Amin is There</h1>
    </main>
  );
}
