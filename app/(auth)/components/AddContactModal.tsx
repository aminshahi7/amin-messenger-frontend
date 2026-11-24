import { useState } from "react";

type ContactType = {
  id: number;
  firstName: string;
  email: string;
};

type Props = {
  onClose: () => void;
  onAdd: () => void;
};

export default function AddContactModal({ onClose, onAdd }: Props) {
  const [email, setEmail] = useState("");

  const handlesubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const Response = await fetch(
        "http://localhost:9000/dashboard/add-contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain",
          },
          credentials: "include",
          body: email,
        },
      );

      if (Response.ok) {
        onAdd();
        onClose();
      } else {
        console.log("Contact konnte nicht hinzugefügt werden");
      }
    } catch (error) {
      console.log("Fehler:", error);
    }

    console.log(event);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <button onClick={onClose} className="absolute right-4 top-4">
          ✕
        </button>

        <h2 className="mb-4 text-xl font-bold">Add Contact</h2>

        <form onSubmit={handlesubmit}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="search e-mail..."
            className="w-full rounded-lg border p-3"
          />

          <button
            className="mt-4 w-full rounded-lg bg-blue-600 p-3 text-white"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
