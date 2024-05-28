import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const UserPresent = localStorage.getItem("User");
    let parsedUser = undefined;

    if (UserPresent) {
        try {
            parsedUser = JSON.parse(UserPresent);
        } catch (error) {
            console.error("Failed to parse user from localStorage:", error);
        }
    }

    const [authUser, setAuthUser] = useState(parsedUser);

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
