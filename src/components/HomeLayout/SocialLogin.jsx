import { FaGithub, FaGoogle } from "react-icons/fa";


export default function SocialLogin() {

    return (
        <>
            <h2 className="text-xl text-gray-700 font-semibold p-2">Login With</h2>
            <div className="my-5 space-y-2">
                <button className="btn w-full btn-outline btn-secondary">
                    <FaGoogle />Login with Google
                </button>
                <button className="btn w-full btn-outline btn-primary">
                    <FaGithub />Login with GitHub
                </button>
            </div>
        </>
    )
}