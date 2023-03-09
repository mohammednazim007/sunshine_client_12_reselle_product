import React, { createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import app from '../Firebase/firebase'

const auth = getAuth(app)
const AuthContext = createContext()

const Context_provider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [currentUser, setCurrentUser] = useState(null)



    //sign in user with email & password
    //
    const createUserByEamilPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //signInWithEmailAndPassword
    //
    const signInUserEmailPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign out current user
    //
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    //get current user after login
    //
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (urs) => {

            setLoading(false)
            setCurrentUser(urs)
        })

        return () => unsubscribe()
    }, [])


    const value = { loading, setLoading, createUserByEamilPassword, currentUser, signOutUser, signInUserEmailPassword }


    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

const useProvider = () => {
    const res = useContext(AuthContext)
    return res
}

export default Context_provider
export { useProvider }
