import React, { useContext } from 'react'
import { userContext } from './Authenticate'
// 20521850
export const useAuth = () => {
  return (
    useContext(userContext)
  )
}

export default useAuth