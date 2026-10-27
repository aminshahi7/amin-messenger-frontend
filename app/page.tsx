import Image from "next/image";
import { Metadata } from "next";
import Signup from "./components/Signup";

export const metadata: Metadata = {
  title: "Amin Messenger Homepage",
  description: "Ein neuer Messenger, wo man miteinander chatten kann.",
};

export default function Home() {

  return (
    
      <main>
        <div className="flex justify-center mt-15">
          <div className="text-6xl text-blue-600">
            <Image
              src="/messenger-logo.png"
              alt="AminMessenger Logo"
              width={180}
              height={180}
              className="h-auto w-40 animate-bounce [animation-duration:1.5s]"
            />
          </div>
        </div>
        <Signup />
      </main>
  );
}
