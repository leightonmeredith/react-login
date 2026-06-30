import { useState, type ReactNode } from "react";
import {UserContext, type UserData} from './userContext'

export function AuthProvider({children}: {children: ReactNode}) {
    const [user, setUser]=useState('')
    const [email, setEmail]=useState('')

    const loginUser = (userData: UserData) => {
        setUser(userData.user);
        setEmail(userData.email)
    }
    const logoutUser = () => {
        setUser('')
        setEmail('')
    }

    return(
        <UserContext value={{user, email, loginUser, logoutUser}}>
            {children}
        </UserContext>
    )
}

