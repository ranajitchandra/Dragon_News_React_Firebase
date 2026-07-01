
import { format } from "date-fns"
import logo from "../assets/logo.png"

export default function Header(){


    return(
        <>
            <header className="flex flex-col items-center justify-center">
                <img className="w-[350px] pt-8" src={logo} alt="Logo" />
                <p className="text-accent py-2">Journalism Without Fear or Favour</p>
                <p className="text-accent pb-4"> { format( new Date(), "EEEE, MMMM, dd, yyyy") } </p>
            </header>

        </>
    )
}