import React from 'react'
import { Navigate } from 'react-router-dom'

export const NavigateTo = ({ to }) => {
    return <Navigate to={to} />
}
