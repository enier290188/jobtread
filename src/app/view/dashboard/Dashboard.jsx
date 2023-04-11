import {Box, Divider, Link, Typography} from '@mui/material'
import {Navigate, NavLink, Outlet, Route, Routes, useMatch, useResolvedPath} from 'react-router-dom'
import {Content001} from './content/Content001.jsx'
import {Content002} from './content/Content002.jsx'
import {Content003} from './content/Content003.jsx'

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
                <Route path={`component001/*`} element={<Content001/>}/>
                <Route path={`component002/*`} element={<Content002/>}/>
                <Route path={`component003/*`} element={<Content003/>}/>
                <Route path={`*`} element={<Navigate to={'/app/error/not-found/'}/>}/>
            </Route>
        </Routes>
    )
}
