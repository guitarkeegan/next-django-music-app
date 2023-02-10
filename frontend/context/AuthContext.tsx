import {createContext, useContext, useState, useEffect} from 'react';
import type { ReactNode } from 'react';
import axios from 'axios';
import {useRouter} from 'next/router';

type User = {
    email: string,
    first_name: string,
    instrument?: string,
    last_name: string,
    role?:string,
    username: string,
}

type authContextType = {
    user: null | User;
    login: (userLogin: {username: string, password: string}) => void;
    logout: () => void;
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
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        if (!user) {
          loadUser();
        }
      }, [user]);

    const login = async (userToLogin: any) => {
        console.log("Logging in user...");
        
        const {username, password} = userToLogin;

        try {
            console.log("Post request to login route...");
            const response = await axios.post('/api/auth/login', {
                username,
                password,
            });
            if (response.data.success){
                
                loadUser();
                // TODO: Check if user is teacher or student and send to the approapriate dashboard
            }
        } catch (error){
            console.error(`Error on call to login api`, error);
        }
    }

    const loadUser = async () => {
        try {
    
          const res = await axios.get("/api/auth/user");
    
          if (res.data.user) {
            if (res.data.user.role === "Teacher"){
                /* This seems to be accessible only from the other pages that
                   call useAuth()
                */ 
                setUser(res.data.user);
                router.push("/dashboard/teacher");
            } else if (res.data.user.role === "Student"){
                console.log("to student dashboard...");
            } else if (!res.data.user.role) {
                router.push("/check-role");
            }
          }

        } catch (error) {
          setUser(null);
          console.error("Error on load user context", error);
        }
      };

      const logout = async () => {
        try {
            console.log("Logging out user...");
            const res = await axios.post("/api/auth/logout");
    
            if (res.data.success) {
                setUser(null);
                router.push("/");
          }

        } catch (error) {
            setUser(null);
            console.error("Error on context logout ", error);
        }
      };

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