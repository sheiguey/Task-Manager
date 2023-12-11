import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'


const PrivateRoutes = ({auth}) => {
    return(
        auth ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoutes;