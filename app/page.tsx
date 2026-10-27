import Image from "next/image";
import { Metadata } from "next";
import Counter from "./Counter";

export const metadata: Metadata = {
  title: "Amin Messenger Homepage",
  description: "Ein neuer Messenger, wo man miteinander chatten kann.",
};

export default function Home() {
  
  return (
    <main>
      <Counter />
    </main>
  );
}
