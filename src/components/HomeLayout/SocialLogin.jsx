import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate, useLocation } from "react-router";


export default function SocialLogin() {
    const { googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    function handleGoogleLogin() {
        googleLogin()
            .then(() => {
                navigate(location.state || "/")
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    return (
        <>
            <h2 className="text-base md:text-xl text-gray-700 font-semibold p-2">Login With</h2>
            <div className="my-3 md:my-5 space-y-2">
                <button onClick={handleGoogleLogin} className="btn w-full btn-outline btn-secondary text-sm md:text-base">
                    <FaGoogle />Login with Google
                </button>
            </div>
        </>
    )
}