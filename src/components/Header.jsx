
import { format } from "date-fns"
import logo from "../assets/logo.png"

export default function Header(){


    return(
        <>
            <header className="flex flex-col items-center justify-center">
                <img className="w-[250px] sm:w-[300px] md:w-[350px] pt-8" src={logo} alt="Logo" />
                <p className="text-accent text-xs sm:text-sm md:text-base py-2 text-center px-4">Journalism Without Fear or Favour</p>
                <p className="text-accent text-xs sm:text-sm md:text-base pb-4"> { format( new Date(), "EEEE, MMMM, dd, yyyy") } </p>
            </header>

        </>
    )
}