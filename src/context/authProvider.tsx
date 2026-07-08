import { useState, type ReactNode } from "react";
import {UserContext, type UserData} from './userContext'

export function AuthProvider({children}: {children: ReactNode}) {
    const [user, setUser]=useState(() => {
        return localStorage.getItem('user') || ''
    })
    const [email, setEmail]=useState(() => {
        return localStorage.getItem('email') || ''
    })

    const loginUser = (userData: UserData) => {
        setUser(userData.user);
        setEmail(userData.email);
        localStorage.setItem('user', userData.user);
        localStorage.setItem('email', userData.email);
    }

    const logoutUser = () => {
        setUser('')
        setEmail('')
        localStorage.removeItem('user');
        localStorage.removeItem('email');
    }

    return(
        <UserContext.Provider value={{user, email, loginUser, logoutUser}}>
            {children}
        </UserContext.Provider>
    )
}

