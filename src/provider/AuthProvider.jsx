import { createContext, useEffect, useState } from "react"
import app from "../firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth(app);

export const AuthContext = createContext()


export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // console.log(user)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword (auth, email, password)
    }

    const logOutUser = () => {
        return signOut (auth,)
    }

    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser)
            setLoading(false)
        })

        return () => {
            unSubscriber()
        }
    }, [])


    const authData = {
        user,
        loading,
        setUser,
        createUser,
        logOutUser,
        loginUser,
    }

    return (
        <>
            <AuthContext value={authData}> {children} </AuthContext>
        </>
    )
}