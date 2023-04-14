import {Box, Divider, Typography} from '@mui/material'
import React from 'react'
import {Outlet, Route, Routes} from 'react-router-dom'
import {ComponentContainer, ComponentContainerContent, ComponentNavigateToAppErrorNotFound} from '../../component'
import {SettingRoute} from '../../setting'
import {RouteNotFound} from './not-found'

const Layout = () => {
    const sxContainer = {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignContent: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'center'
    }

    return (
        <ComponentContainer>
            <ComponentContainerContent>
                <Box component={'div'} sx={sxContainer}>
                    <Typography component={'h1'} variant={'h1'}>Oops!</Typography>
                    <Typography component={'p'} variant={'body1'}>Sorry, an unexpected error has occurred.</Typography>
                </Box>
                <Divider/>
                <Box component={'div'} mt={2} mb={6} sx={sxContainer}>
                    <Outlet/>
                </Box>
            </ComponentContainerContent>
        </ComponentContainer>
    )
}

export const Error = () => {
    return (
        <Routes>
            <Route path={``} element={<Layout/>}>
                <Route index element={<ComponentNavigateToAppErrorNotFound/>}/>
                <Route path={`${SettingRoute.app.error.notFound.PATH}/*`} element={<RouteNotFound/>}/>
                <Route path={`*`} element={<ComponentNavigateToAppErrorNotFound/>}/>
            </Route>
        </Routes>
    )
}
