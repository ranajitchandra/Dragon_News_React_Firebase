import { Outlet } from "react-router";
import Navbar from "../components/Navbar"

export default function RootAuth(){

    return(
        <div className="max-w-6xl mx-auto bg-base-300">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}