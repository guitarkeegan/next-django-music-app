import {createContext, SyntheticEvent, useContext, useState, useEffect} from 'react';
import type { ReactNode } from 'react';
import axios from 'axios';
import {useRouter} from 'next/router';

type authContextType = {
    user: null | boolean;
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
    const [user, setUser] = useState<boolean | null>(null);

    useEffect(() => {
        if (!user) {
          loadUser();
        }
      }, [user]);

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
                
                loadUser();
                // TODO: Check if user is teacher or student and send to the approapriate dashboard
                router.push('/dashboard/teacher');
            }
        } catch (error){
            console.error(`Error on call to login api`, error);
        }

    }

    const loadUser = async () => {
        try {
    
          const res = await axios.get("/api/auth/user");
    
          if (res.data.user) {
            setUser(true);
            // setUser(res.data.user);
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