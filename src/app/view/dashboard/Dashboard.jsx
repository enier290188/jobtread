import {Box, Divider, Link, Typography} from '@mui/material'
import {Navigate, NavLink, Outlet, Route, Routes, useMatch, useResolvedPath} from 'react-router-dom'
import {ComponentNavigateToAppErrorNotFound} from '../../component'
import {SettingRoute} from '../../setting'
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
                    <LinkCustom to={`${SettingRoute.app.dashboard.content001.TO}`}>Content001</LinkCustom>
                </Box>
                <Box component={'div'} p={1}>
                    <LinkCustom to={`${SettingRoute.app.dashboard.content002.TO}`}>Content002</LinkCustom>
                </Box>
                <Box component={'div'} p={1}>
                    <LinkCustom to={`${SettingRoute.app.dashboard.content003.TO}`}>Content003</LinkCustom>
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
                <Route index element={<Navigate to={`${SettingRoute.app.dashboard.content002.TO}`}/>}/>
                <Route path={`${SettingRoute.app.dashboard.content001.PATH}*`} element={<RouteContent001/>}/>
                <Route path={`${SettingRoute.app.dashboard.content002.PATH}*`} element={<RouteContent002/>}/>
                <Route path={`${SettingRoute.app.dashboard.content003.PATH}*`} element={<RouteContent003/>}/>
                <Route path={`*`} element={<ComponentNavigateToAppErrorNotFound/>}/>
            </Route>
        </Routes>
    )
}
