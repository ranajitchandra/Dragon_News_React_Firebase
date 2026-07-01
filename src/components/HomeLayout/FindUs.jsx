import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";


export default function FindUs() {

    return (
        <>
            <h2 className="text-lg text-gray-700 font-semibold p-2">Find Us On</h2>
            <button className="border border-base-300 px-4 my-2 flex gap-2 font-semibold text-gray-800 w-full justify-start items-center py-4">
                <FaFacebook size={20} className="mr-2" /> Facebook
            </button>
            <button className="border border-base-300 px-4 my-2 flex gap-2 font-semibold text-gray-800 w-full justify-start items-center py-4">
                <AiFillTwitterCircle size={20} className="mr-2" /> Twitter
            </button>
            <button className="border border-base-300 px-4 my-2 flex gap-2 font-semibold text-gray-800 w-full justify-start items-center py-4">
                <AiFillInstagram size={20} className="mr-2" /> Instagram
            </button>

        </>
    )
}