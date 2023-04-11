import {Box, Divider, Typography} from '@mui/material'
import React from 'react'
import {NavLink, Outlet, Route, Routes} from 'react-router-dom'
import {Content001} from './content/Content001.jsx'
import {Content002} from './content/Content002.jsx'
import {Content003} from './content/Content003.jsx'

const Layout = () => {
    return (
        <Box>
            <Typography variant={'h2'}>Dashboard View</Typography>
            <Box display={'flex'}>
                <Box p={1}>
                    <NavLink to={'component001/'}>Component001</NavLink>
                </Box>
                <Box p={1}>
                    <NavLink to={'component002/'}>Component002</NavLink>
                </Box>
                <Box p={1}>
                    <NavLink to={'component003/'}>Component003</NavLink>
                </Box>
            </Box>
            <Divider/>
            <Outlet/>
            ...
        </Box>
    )
}

const View = () => {
    return null
}

export const Dashboard = () => {
    return (
        <Routes>
            <Route path={``} element={<Layout/>}>
                <Route index element={<View/>}/>
                <Route path={`content001/`} element={<Content001/>}/>
                <Route path={`content002/`} element={<Content002/>}/>
                <Route path={`content003/`} element={<Content003/>}/>
            </Route>
        </Routes>
    )
}
