import {CssBaseline, ThemeProvider} from '@mui/material'
import React from 'react'
import {BrowserRouter, Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {AlertLayout, FooterLayout, HeaderLayout, MainLayout} from './layout'
import {SettingTheme} from './setting'
import {Dashboard as ViewDashboard} from './view/dashboard/Dashboard.jsx'
import {Error as ViewError} from './view/error/Error.jsx'
import {Task as ViewTask} from './view/task/Task.jsx'

export const App = () => {
    return (
        <BrowserRouter basename={''}>
            <ThemeProvider theme={SettingTheme}>
                <CssBaseline/>
                <AlertLayout/>
                <HeaderLayout/>
                <MainLayout>
                    <Routes>
                        <Route path={`/`}>
                            <Route path={``} element={<Navigate to={'dashboard/'}/>}/>
                            <Route path={`dashboard/*`} element={<ViewDashboard/>}/>
                            <Route path={`task/*`} element={<ViewTask/>}/>
                            <Route path={'*'} element={<ViewError/>}/>
                        </Route>
                    </Routes>
                </MainLayout>
                <FooterLayout/>
            </ThemeProvider>
        </BrowserRouter>
    )
}
