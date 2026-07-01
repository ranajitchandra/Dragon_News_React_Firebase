import { Link, NavLink, useNavigate } from "react-router";
import userIcon from "../assets/user.png"
import { use, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


export default function Navbar() {
    const { user, logOutUser } = useContext(AuthContext)
    const navigate = useNavigate()

    function handleSignOut(){
        logOutUser().then(() => {
            // console.log("Sign Out")
            navigate("/auth/login")
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <nav className="flex items-center justify-between gap-4 py-8">
            <div>{user && user.email}</div>
            <ul className="flex items-center justify-center gap-5 text-accent">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/career">Career</NavLink></li>
            </ul>

            <div className="flex items-center justify-center gap-2">
                <img className="w-9" src={userIcon} alt="User" />
                {
                    user ? <button onClick={handleSignOut} className="bg-primary px-8 py-1 text-base-200 font-semibold text-lg">Log out</button>
                    : 
                    <Link to="/auth/login" className="bg-primary px-8 py-1 text-base-200 font-semibold text-lg">Login</Link>
                }
                
            </div>

        </nav>
    )
}