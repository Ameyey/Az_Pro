import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { Navigate } from 'react-router-dom'

function ProRounter({children}) {
  const {user}= useUser()
  return (
    <div>
      {user ? children : <Navigate to="/" />}
    </div>
  )
}

export default ProRounter
