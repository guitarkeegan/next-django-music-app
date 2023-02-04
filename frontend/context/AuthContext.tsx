import {createContext, SyntheticEvent, useContext, useState} from 'react';
import type { ReactNode } from 'react';

type authContextType = {
    user: null | boolean;
    login: (e: Event) => void;
    logout: (e: Event) => void;
}

const authContextDefaultValues: authContextType = {
    user: null,
    login: () => {},
    logout: () => {},
}

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthContext);
}

type Props = {
    children: ReactNode;
}

export function AuthProvider({children}: Props){
    const [user, setUser] = useState<boolean | null>(null);

    const login = (e: Event) => {
        e.preventDefault();
        console.log("Logging in user...");
        setUser(true);
    }

    const logout = (e: Event) => {
        e.preventDefault();
        console.log("Logging out user...")
        setUser(false);
    }

    const value ={
        user,
        login,
        logout
    }
    return (
        <>
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
        </>
    )
}