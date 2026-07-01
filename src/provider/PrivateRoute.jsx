import { useContext } from "react"
import { AuthContext } from "./AuthProvider"
import { Navigate, useLocation } from "react-router"
import { ScaleLoader } from "react-spinners"



export default function PrivateRoute({ children }) {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
                <ScaleLoader color="#ffffff" />
            </div>
        )
    } else if (!user) {
        return <Navigate state={location.pathname} to="/auth/login"></Navigate>
    } else {
        return children
    }
}