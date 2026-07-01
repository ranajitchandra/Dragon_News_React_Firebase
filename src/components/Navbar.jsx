import { Link, NavLink, useNavigate } from "react-router";
import userIcon from "../assets/user.png"
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FiSearch } from "react-icons/fi";


export default function Navbar() {
    const { user, logOutUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState("")

    function handleSearch(e) {
        e.preventDefault()
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
            setSearchQuery("")
        }
    }

    function handleSignOut() {
        logOutUser().then(() => {
            navigate("/auth/login")
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <nav className="flex items-center justify-between gap-4 py-8">
            <div className="flex items-center gap-4">
                {user && (
                    <Link to="/profile" className="flex items-center gap-2">
                        <img className="w-9 h-9 rounded-full object-cover" src={user.photoURL || userIcon} alt="User" />
                        <span className="text-sm text-accent hidden md:inline">{user.displayName || user.email}</span>
                    </Link>
                )}
            </div>

            <ul className="flex items-center justify-center gap-5 text-accent">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/career">Career</NavLink></li>
            </ul>

            <div className="flex items-center justify-center gap-2">
                <form onSubmit={handleSearch} className="hidden md:flex items-center border border-base-300 rounded-lg overflow-hidden">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        placeholder="Search news..."
                        className="px-3 py-1.5 text-sm outline-none w-40"
                    />
                    <button type="submit" className="px-3 py-1.5 bg-primary text-base-200">
                        <FiSearch />
                    </button>
                </form>

                {
                    user ? (
                        <div className="flex items-center gap-2">
                            <button onClick={handleSignOut} className="bg-primary px-8 py-1 text-base-200 font-semibold text-lg">Log out</button>
                        </div>
                    ) :
                        <Link to="/auth/login" className="bg-primary px-8 py-1 text-base-200 font-semibold text-lg">Login</Link>
                }
            </div>

        </nav>
    )
}