import {Box} from '@mui/material'
import React from 'react'
import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {RouteNotFound} from './not-found'

const Layout = () => {
    return (
        <Box component={'div'}>
            <Outlet/>
        </Box>
    )
}

export const Error = () => {
    return (
        <Routes>
            <Route path={``} element={<Layout/>}>
                <Route path={`not-found/*`} element={<RouteNotFound/>}/>
                <Route path={`*`} element={<Navigate to={'/app/error/not-found/'}/>}/>
            </Route>
        </Routes>
    )
}
