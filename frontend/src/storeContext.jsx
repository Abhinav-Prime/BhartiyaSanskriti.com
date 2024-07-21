import React, { createContext, useEffect, useState } from 'react'
export const StoreContext=createContext(null);
const StoreContextProvider = (props) => {
  const SERVER_URL="http://localhost:5001"
  const [token,setToken]=useState("");
  const [username,setUsername]=useState("user")
  useEffect(()=>{
    setToken(localStorage.getItem('token'))
    setUsername(localStorage.getItem('username'))

  },[])
  const contextValue={
   SERVER_URL,
   token,
   setToken,
   username,
   setUsername
  }
  return (
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider