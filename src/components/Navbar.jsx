import { Link, NavLink, useNavigate } from "react-router";
import userIcon from "../assets/user.png"
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";


export default function Navbar() {
    const { user, logOutUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState("")
    const [menuOpen, setMenuOpen] = useState(false)

    function handleSearch(e) {
        e.preventDefault()
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
            setSearchQuery("")
            setMenuOpen(false)
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
        <nav className="py-2 lg:py-8">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    {user && (
                        <Link to="/profile" className="flex items-center gap-2">
                            <img className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover" src={user.photoURL || userIcon} alt="User" />
                            <span className="text-xs md:text-sm text-accent hidden sm:inline">{user.displayName || user.email}</span>
                        </Link>
                    )}
                </div>

                <ul className="hidden md:flex items-center justify-center gap-5 text-accent">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/career">Career</NavLink></li>
                </ul>

                <div className="hidden md:flex items-center justify-center gap-2">
                    <form onSubmit={handleSearch} className="flex items-center border border-base-300 rounded-lg overflow-hidden">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            placeholder="Search news..."
                            className="px-3 py-1.5 text-sm outline-none w-32 lg:w-40"
                        />
                        <button type="submit" className="px-3 py-1.5 bg-primary text-base-200">
                            <FiSearch />
                        </button>
                    </form>

                    {
                        user ? (
                            <button onClick={handleSignOut} className="bg-primary px-6 lg:px-8 py-1 text-base-200 font-semibold text-base lg:text-lg">Log out</button>
                        ) :
                            <Link to="/auth/login" className="bg-primary px-6 lg:px-8 py-1 text-base-200 font-semibold text-base lg:text-lg">Login</Link>
                    }
                </div>

                <button className="md:hidden text-2xl text-accent" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden mt-4 bg-base-200 rounded-xl p-4 space-y-3">
                    <div className="flex flex-col gap-2 text-accent font-semibold">
                        <NavLink onClick={() => setMenuOpen(false)} to="/">Home</NavLink>
                        <NavLink onClick={() => setMenuOpen(false)} to="/about">About</NavLink>
                        <NavLink onClick={() => setMenuOpen(false)} to="/career">Career</NavLink>
                    </div>
                    <form onSubmit={handleSearch} className="flex items-center border border-base-300 rounded-lg overflow-hidden">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            placeholder="Search news..."
                            className="flex-1 px-3 py-2 text-sm outline-none"
                        />
                        <button type="submit" className="px-3 py-2 bg-primary text-base-200">
                            <FiSearch />
                        </button>
                    </form>
                    <div className="flex gap-2">
                        {user ? (
                            <button onClick={handleSignOut} className="flex-1 bg-primary px-4 py-2 text-base-200 font-semibold text-center rounded-lg">Log out</button>
                        ) : (
                            <Link onClick={() => setMenuOpen(false)} to="/auth/login" className="flex-1 bg-primary px-4 py-2 text-base-200 font-semibold text-center rounded-lg">Login</Link>
                        )}
                        {user && (
                            <Link onClick={() => setMenuOpen(false)} to="/profile" className="flex-1 border border-base-300 px-4 py-2 font-semibold text-center rounded-lg">Profile</Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    )
}