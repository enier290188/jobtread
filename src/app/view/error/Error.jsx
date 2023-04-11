import {Box, Typography} from '@mui/material'
import React from 'react'
import {Outlet, Route, Routes} from 'react-router-dom'
import {ComponentNavigateToAppErrorNotFound} from '../../component'
import {RouteNotFound} from './not-found'

const Layout = () => {
    return (
        <Box component={'div'}>
            <Typography component={'p'} variant={'body1'}>---Layout Main Error---</Typography>
            <Outlet/>
        </Box>
    )
}

export const Error = () => {
    return (
        <Routes>
            <Route path={``} element={<Layout/>}>
                <Route path={`not-found/*`} element={<RouteNotFound/>}/>
                <Route path={`*`} element={<ComponentNavigateToAppErrorNotFound/>}/>
            </Route>
        </Routes>
    )
}
