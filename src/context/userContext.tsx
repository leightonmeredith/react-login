import { createContext } from "react";

export type AuthContextType = {
    user: string,
    email: string,
    loginUser: (userData: UserData) => void,
    logoutUser: () => void
}

export type UserData = {
    user: string,
    email: string
}

export const UserContext = createContext<AuthContextType | undefined>(undefined)


