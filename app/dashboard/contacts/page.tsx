"use client";

type ContactType = {
  id: number;
  firstName: string;
  email: string;
};

import AddContactModal from "@/app/(auth)/components/AddContactModal";
import Contact from "@/app/(auth)/components/Contact";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function contacts() {
  const [isOpen, setIsOpen] = useState(false);
  const [contacts, setContacts] = useState<ContactType[]>([]);
  const [count, setCount] = useState(0);

  const router = useRouter();

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const removeContact = (email: string) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.email !== email),
    );
  };

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

  useEffect(() => {
    const getContacts = async () => {
      try {
        const response = await fetch(
          "http://localhost:9000/dashboard/contacts",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch contacts");
        }

        console.log("Status:", response.status);

        const contact = await response.json();
        setContacts(contact);
        console.log("Response:", contact);
      } catch (error) {
        console.log("Some errors in contacts fetching:", error);
      }
    };

    getContacts();
  }, [count]);

  return (
    <main>
      <button
        className="mx-auto flex mt-4 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-md transition-all     duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-95"
        onClick={() => setIsOpen(true)}
      >
        Add new contact
        <span className="text-xl">+</span>
      </button>
      {isOpen && (
        <AddContactModal
          onClose={() => setIsOpen(false)}
          onAdd={increaseCount}
        />
      )}

      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          firstName={contact.firstName}
          email={contact.email}
          onDelete={removeContact}
        />
      ))}
    </main>
  );
}
