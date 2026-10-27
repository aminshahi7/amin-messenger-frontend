"use client";

export default function Signup(){

    const onSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const data = new FormData(event.currentTarget);

        const user = {
            username: data.get("username"),
            firstName: data.get("firstname"),
            lastname: data.get("lastname"),
            email: data.get("email"),
            password: data.get("password"),
        };

        const requestData = new FormData();

        requestData.append(
            "user",
            new Blob([JSON.stringify(user)], {
                type: "application/json",
            })
        );

        const profilePicture = data.get("profilePicture");

        if (profilePicture instanceof File && profilePicture.size > 0) {
            requestData.append("profilePicture", profilePicture);
        }

        if (profilePicture instanceof File && profilePicture.size > 0) {
            const maxSize = 20 * 1024 * 1024; // 20 MB


            if (profilePicture.size > maxSize) {
                alert("Das Profilbild darf maximal 20 MB groß sein.");
                return;
            }
        }

        const response = await fetch("http://localhost:9000/api/login", {
            method: "POST",
            body: requestData,
        });

        const responseText = await response.text();


        if (!response.ok) {
            console.error("HTTP-Status:", response.status);
            console.error("Backend-Fehler:", responseText);
            alert(`Registrierung fehlgeschlagen: ${response.status}`);
            return;
        }

        console.log("Registrierung erfolgreich");
    }

    return(

        <main>
          <div className="flex min-h-screen items-center justify-center  bg-green-200 px-4">

            <form
                onSubmit={onSubmit}
                className="w-full max-w-md space-y-6 rounded-2xl border  border-slate-800 bg-slate-900 p-8 shadow-2xl shadow-blue-950/30"
            >

                {/* Header */}
                <div className="text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold text-white shadow-lg shadow-blue-600/30">
                    A
                    </div>

                    <h1 className="text-3xl font-bold tracking-tight text-white">
                    Create Account
                    </h1>

                    <p className="mt-2 text-sm text-slate-400">
                    Erstelle deinen Account bei AminMessenger
                    </p>
                </div>

                {/* Username */}
                <div className="space-y-2">
                    <label
                        htmlFor="username"
                        className="text-sm font-medium text-slate-300"
                    >
                    Username
                    </label>

                    <input
                        id="username"
                        type="text"
                        name="username"
                        placeholder="Dein Benutzername"
                        required
                        className="w-full rounded-xl border border-slate-700 bg-slate-800/          70 px-4 py-3 text-white placeholder:text-slate-500 outline-none         transition duration-200 focus:border-blue-500 focus:ring-2          focus:ring-blue-500/20"
                    />
                </div>

                {/* First Name */}
                <div className="space-y-2">
                    <label
                        htmlFor="firstname"
                        className="text-sm font-medium text-slate-300"
                    >
                    First Name
                    </label>

                    <input
                        id="firstname"
                        type="text"
                        name="firstname"
                        placeholder="Dein VorName"
                        required
                        className="w-full rounded-xl border border-slate-700 bg-slate-800/          70 px-4 py-3 text-white placeholder:text-slate-500 outline-none         transition duration-200 focus:border-blue-500 focus:ring-2          focus:ring-blue-500/20"
                    />
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                    <label
                        htmlFor="lastname"
                        className="text-sm font-medium text-slate-300"
                    >
                    Last Name
                    </label>

                    <input
                        id="lastname"
                        type="text"
                        name="lastname"
                        placeholder="Dein NachName"
                        required
                        className="w-full rounded-xl border border-slate-700 bg-slate-800/          70 px-4 py-3 text-white placeholder:text-slate-500 outline-none         transition duration-200 focus:border-blue-500 focus:ring-2          focus:ring-blue-500/20"
                    />
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <label
                        htmlFor="email"
                        className="text-sm font-medium text-slate-300"
                    >
                        E-Mail
                    </label>

                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        required
                        className="w-full rounded-xl border border-slate-700 bg-slate-800/          70 px-4 py-3 text-white placeholder:text-slate-500 outline-none         transition duration-200 focus:border-blue-500 focus:ring-2          focus:ring-blue-500/20"
                    />
                </div>

                {/* Password */}
                <div className="space-y-2">
                    <label
                        htmlFor="password"
                        className="text-sm font-medium text-slate-300"
                    >
                        Passwort
                    </label>

                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Mindestens 8 Zeichen"
                        minLength={8}
                        required
                        className="w-full rounded-xl border border-slate-700 bg-slate-800/          70 px-4 py-3 text-white placeholder:text-slate-500 outline-none         transition duration-200 focus:border-blue-500 focus:ring-2          focus:ring-blue-500/20"
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="profilePicture"
                        className="text-sm font-medium text-slate-300"
                    >
                        Profilbild
                    </label>

                    <input
                        id="profilePicture"
                        type="file"
                        name="profilePicture"
                        accept="image/png, image/jpeg, image/webp"
                        className="w-full cursor-pointer rounded-xl border border-slate-700 bg-slate-800/70 text-sm text-slate-300 file:mr-4 file:border-0 file:bg-blue-600 file:px-4 file:py-3 file:font-semibold file:text-white hover:file:bg-blue-500"
                    />
                </div>

                {/* Submit Button */}
                <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2          rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white shadow-lg         shadow-blue-600/20 transition duration-200 hover:bg-blue-500          hover:shadow-blue-500/30 active:scale-[0.98]"
                >
                Registrieren

                <span className="transition-transform duration-200          group-hover:translate-x-1">
                 →
                </span>
                </button>

                {/* Footer */}
                <p className="text-center text-sm text-slate-400">
                Bereits registriert?{" "}
                <a
                    href="/login"
                    className="font-medium text-blue-400 transition             hover:text-blue-300"
                >
                    Jetzt anmelden
                </a>
                </p>

            </form>
          </div>

        </main>
    )
}