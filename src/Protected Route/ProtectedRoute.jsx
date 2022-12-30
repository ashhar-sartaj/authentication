import React from 'react'
import { Navigate } from 'react-router-dom'
import {UserAuth} from '../Context/authContext'


const ProtectedRoute = ({children}) => {
  const { user } = UserAuth()
  if (!user) {
    //if the user is not authenticated, then redirect to login page.
    return <Navigate to="/"/>
  }
  return children
}

export default ProtectedRoute
