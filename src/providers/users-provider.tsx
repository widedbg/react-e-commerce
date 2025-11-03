import type { TLogin } from "@/lib/schemas";
import { createContext, useContext, useEffect, useState } from "react";
type UserContextType ={
    user?:TLogin | null;
    setUser: (user:TLogin | null)=> void;
}
const initValue = {
    user:{
        email:'',
        password:"",
    },
    setUser: ()=>null,
};
export const UsersContext = createContext<UserContextType>(initValue);
export function UserProvider({
    children,
    ...props}){

        const [user, setUser] = useState<TLogin | null>(
            JSON.parse(localStorage.getItem('user-data') as string) ?? undefined
        );
        useEffect(() =>{
            if(user)
            localStorage.setItem('user-data', JSON.stringify(user))
            console.log(user);
        },[user]
        )

        const value = {
            user,
            setUser
        }
        return (<UsersContext.Provider {...props} value={value}>
            {children}
        </UsersContext.Provider>
)    }
export const useUsers= () => {
    const context = useContext(UsersContext);
    return context;
}