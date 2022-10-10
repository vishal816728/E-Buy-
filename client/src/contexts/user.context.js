import React ,{ createContext, useState } from "react";


// as the actual value you want to access

export const UserContext=createContext({
       currentUser:null,
       setCurrentUser:()=>null
})

export const UserProvider=({ children })=>{
    const [currentUser,setCurrentUser]=useState()

    const value={currentUser,setCurrentUser}
    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}


// what we are doing is that we want to get the these two states anywhere wherever we will pass the children
