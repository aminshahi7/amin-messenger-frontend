"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function setting() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("http://localhost:9000/auth/check", {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          return;
        } else {
          router.replace("/login");
        }
      } catch (error) {
        console.log("Authentication error:", error);
        router.replace("/login");
      }
    };

    checkAuth();
  }, [router]);

  return (
    <main>
      <h1>Setting</h1>
    </main>
  );
}
