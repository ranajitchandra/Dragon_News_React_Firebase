import { createContext, useEffect, useState } from "react"
import { auth } from "../firebase/Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut } from "firebase/auth";

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
        return signOut(auth)
    }

    const googleLogin = () => {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }

    const githubLogin = () => {
        const provider = new GithubAuthProvider()
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser)
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }
    }, [])


    const authData = {
        user,
        loading,
        setUser,
        createUser,
        logOutUser,
        loginUser,
        googleLogin,
        githubLogin,
    }

    return (
        <AuthContext.Provider value={authData}> {children} </AuthContext.Provider>
    )
}