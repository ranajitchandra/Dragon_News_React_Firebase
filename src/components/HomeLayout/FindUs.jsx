import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";


export default function FindUs() {

    return (
        <>
            <h2 className="text-base md:text-lg text-gray-700 font-semibold p-2">Find Us On</h2>
            <button className="border border-base-300 px-3 md:px-4 my-2 flex gap-2 font-semibold text-gray-800 w-full justify-start items-center py-3 md:py-4 text-sm md:text-base">
                <FaFacebook size={18} className="mr-2 flex-shrink-0" /> Facebook
            </button>
            <button className="border border-base-300 px-3 md:px-4 my-2 flex gap-2 font-semibold text-gray-800 w-full justify-start items-center py-3 md:py-4 text-sm md:text-base">
                <AiFillTwitterCircle size={18} className="mr-2 flex-shrink-0" /> Twitter
            </button>
            <button className="border border-base-300 px-3 md:px-4 my-2 flex gap-2 font-semibold text-gray-800 w-full justify-start items-center py-3 md:py-4 text-sm md:text-base">
                <AiFillInstagram size={18} className="mr-2 flex-shrink-0" /> Instagram
            </button>

        </>
    )
}