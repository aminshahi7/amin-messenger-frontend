"use client";

export default function login(){

    const onSubmit = async() =>{
        await console.log("Kos");
    }

    return(
        <main>
          <div className="flex m-20 items-center justify-center  bg-green-200 px-4">

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
                    Login
                    </h1>
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
                        placeholder="Enter your password"
                        required
                        className="w-full rounded-xl border border-slate-700 bg-slate-800/ 70 px-4 py-3 text-white placeholder:text-slate-500 outline-none         transition duration-200 focus:border-blue-500 focus:ring-2          focus:ring-blue-500/20"
                    />
                </div>

                {/* Submit Button */}
                <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2          rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white shadow-lg         shadow-blue-600/20 transition duration-200 hover:bg-blue-500          hover:shadow-blue-500/30 active:scale-[0.98]"
                >
                Login

                <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                </span>
                </button>
            </form>
          </div>

        </main>
    )
}