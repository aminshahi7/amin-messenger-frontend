import "../globals.css"

export default function DashboardNav() {
    return(
        <div className="navbar bg-white text-black shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl text-black">AminMessenger</a>
            </div>
            <div className="navbar-center flex-1 justify-center px-4">
                <input type="text" placeholder="Search" className="input w-full max-w-2xl border-black bg-white text-black placeholder:text-black" />
            </div>
            <div className="flex flex-1 justify-end gap-2">
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar text-black">
                    <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <ul
                 tabIndex={-1}
                    className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 bg-white p-2 text-black shadow">
                    <li>
                    <a href="/dashboard/profile">
                        Profile 👤
                    </a>
                    </li>
                    <li><a href="/dashboard/contacts">Contacts 👥</a></li>
                    <li><a href="/dashboard/setting">Settings ⚙️</a></li>
                    <li><a href="/dashboard/chats">Chats 💬</a></li>
                    <li><a>Logout 🚪</a></li>
                </ul>
                </div>
            </div>
        </div>
    )
}