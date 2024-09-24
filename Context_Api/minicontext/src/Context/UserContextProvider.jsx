import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{
    const [user,setUser] = React.useState(NULL)
      return(
        <>
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
        </>
      )
}

export default UserContextProvider;