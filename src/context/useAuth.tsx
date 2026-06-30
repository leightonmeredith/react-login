
import { useContext } from "react";
import { UserContext } from "./userContext";

export function useAuth() {
    const context = useContext(UserContext);
    if(!context) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
}