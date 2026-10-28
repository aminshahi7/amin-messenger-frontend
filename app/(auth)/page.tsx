import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

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
        <div className="flex justify-center mt-6">
          <Link
            href="/signup"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl"
          >
            Sign up HIER
          </Link>
        </div>
      </main>
  );
}
