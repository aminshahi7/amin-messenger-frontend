type ContactProps = {
  firstName: string;
  email: string;
    onDelete: (email: string) => void;
};

export default function Contact({ firstName, email, onDelete }: ContactProps) {
  const handleDelete = async (email: string) => {
    try {
      const response = await fetch(
        "http://localhost:9000/dashboard/delete-contact",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "text/plain",
          },
          body: email,
          credentials: "include",
        },
      );

      const data = await response.text();

      if (response.ok) {
        onDelete(email)
        console.log(email + " deleted");
        console.log(data);
      } else {
        console.log("Not deleted:", data);
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };
  return (
    <main>
      <div className="bg-blue-500 cursor-pointer hover:bg-blue-50 mx-auto mt-4 flex w-full max-w-xs items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-200 hover:border-blue-300 hover:shadow-md">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
          {firstName.charAt(0).toUpperCase()}
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="truncate text-sm font-semibold text-gray-800">
            {firstName}
          </h2>
          <p className="truncate text-xs text-gray-500">{email}</p>
        </div>
        <button
          onClick={() => handleDelete(email)}
          className="shrink-0 rounded-lg p-2 text-gray-400 transition-colors hover:bg-red-100 hover:text-red-600"
          title="Delete contact"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 7h12m-10 0V5h8v2m-9 0 1 13h8l1-13M10 11v5m4-5v5"
            />
          </svg>
        </button>
      </div>
    </main>
  );
}
