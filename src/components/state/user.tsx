import { useState } from 'react';

type AuthUser = {
    name: string,
    email: string,
}

export const User = () => {

    // \const [user, setUser] = useState<AuthUser | null>(null); with ? operator
    const [user, setUser] = useState<AuthUser>({} as AuthUser); // without ??
    // -> we are lying that empty object is always AuthUser (TYPE ASSERTION)

    const handleLogin = () => {
        setUser({
            name: "Jakub",
            email: "jakub@gmail.com"
        });
    };
    // Only for ? operator
    // const handleLogout = () => {
    //     setUser(null);
    // };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            {/*<button onClick={handleLogout}>Logout</button>*/}
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    );
}