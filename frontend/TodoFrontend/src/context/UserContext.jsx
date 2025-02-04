import React, { useEffect } from "react";
import { useContext,useState,createContext } from "react";


const UserContext = createContext();

const UserContextProvider=({children})=>{
    const[user,setUser]=useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(user? true: false);

    useEffect(() => {
        //fetch req to get user object
    },[isAuthenticated])

    // console.log(isAuthenticated)
    return(
        <UserContext.Provider value={{user,setUser, isAuthenticated, setIsAuthenticated}}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => useContext(UserContext);

export {UserContext, UserContextProvider,useUser};