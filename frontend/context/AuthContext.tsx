import {createContext, SyntheticEvent, useContext, useState} from 'react';
import type { ReactNode } from 'react';
import axios from 'axios';
import {useRouter} from 'next/router';

type authContextType = {
    user: null | boolean;
    login: (userLogin: {username: string, password: string}) => void;
    logout?: (e: SyntheticEvent) => void;
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
    const router = useRouter();
    const [user, setUser] = useState<boolean | null>(null);

    const login = async (loginUser: any) => {
        console.log("Logging in user...");
        
        console.log(`username: ${loginUser.username}`);
        console.log(`password: ${loginUser.password}`);
        const {username, password} = loginUser;

        try {
            console.log("Post request to login route...");
            const response = await axios.post('/api/auth/login', {
                username,
                password,
            });
            if (response.data.success){
                setUser(true);
                router.push('/');
            }
        } catch (error){
            console.error(`Error on call to login api`, error);
        }

    }

    const logout = (e: SyntheticEvent) => {
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