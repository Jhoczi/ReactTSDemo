import React, { useState, createContext } from "react";

export type AuthUserContext = {
    name: string,
    email: string,
}

type UserContextType = {
    user: AuthUserContext | null,
    setUser:  React.Dispatch<React.SetStateAction<AuthUserContext | null>>,
}

type UserContextProviderProps = {
    children: React.ReactNode,
}

export const UserContext = createContext<UserContextType | null>({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUserContext | null>(null);

    return <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>
}