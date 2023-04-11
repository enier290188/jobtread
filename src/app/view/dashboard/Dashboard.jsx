import {Box, Divider, Link, Typography} from '@mui/material'
import React from 'react'
import {Navigate, NavLink, Outlet, Route, Routes, useMatch, useResolvedPath} from 'react-router-dom'
import {ComponentNavigateToAppErrorNotFound} from '../../component'
import {RouteContent001} from './content001'
import {RouteContent002} from './content002'
import {RouteContent003} from './content003'

const LinkCustom = ({children, to, ...props}) => {
    const resolvedPath = useResolvedPath(to)
    const match = useMatch({path: resolvedPath.pathname, end: false})

    return (
        <Link component={NavLink} to={to} sx={{textDecoration: match ? 'underline' : 'none'}} {...props}>
            {children}
        </Link>
    )
}

const Layout = () => {
    return (
        <Box component={'div'}>
            <Typography component={'p'} variant={'body1'}>---Layout Main Dashboard---</Typography>
            <Box component={'div'} display={'flex'}>
                <Box component={'div'} p={1}>
                    <LinkCustom to={'component001/'}>Component001</LinkCustom>
                </Box>
                <Box component={'div'} p={1}>
                    <LinkCustom to={'component002/'}>Component002</LinkCustom>
                </Box>
                <Box component={'div'} p={1}>
                    <LinkCustom to={'component003/'}>Component003</LinkCustom>
                </Box>
            </Box>
            <Divider component={'div'}/>
            <Outlet/>
        </Box>
    )
}

export const Dashboard = () => {
    return (
        <Routes>
            <Route path={``} element={<Layout/>}>
                <Route index element={<Navigate to={'component002/'}/>}/>
                <Route path={`component001/*`} element={<RouteContent001/>}/>
                <Route path={`component002/*`} element={<RouteContent002/>}/>
                <Route path={`component003/*`} element={<RouteContent003/>}/>
                <Route path={`*`} element={<ComponentNavigateToAppErrorNotFound/>}/>
            </Route>
        </Routes>
    )
}
