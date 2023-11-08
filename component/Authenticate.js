import { View, Text } from 'react-native'
import React from 'react'
import { createContext, useState } from 'react';
export const userContext = createContext()
const Authenticate = ({children}) => {
    const [auth, setAuth] = useState({
        username:"",
        password:""
    })
    // 20521850
    const value = {
        auth,
        setAuth,
    }
    return (
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    )
}

export default Authenticate