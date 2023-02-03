import {useState, useEffect, createContext} from 'react';

interface UserContext {
    email: string,
    password: string
}

const AuthContext = createContext<UserContext | null>(null);

export const AuthProvider = ({children}) => {
    // provide all functions to manage state
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState(null)

    return (
        <AuthContext.Provider 
        value={
            loading,
            user,
            error,
            isAuthenticated,
        }>
        {children}
        </AuthContext.Provider>
    )
}