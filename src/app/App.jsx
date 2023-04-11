import {CssBaseline, ThemeProvider} from '@mui/material'
import React from 'react'
import {BrowserRouter, Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {LayoutAlert, LayoutFooter, LayoutHeader, LayoutMain} from './layout'
import {SettingTheme} from './setting'
import {Dashboard as ViewDashboard} from './view/dashboard/Dashboard.jsx'
import {Error as ViewError} from './view/error/Error.jsx'
import {Task as ViewTask} from './view/task/Task.jsx'

export const App = () => {
    return (
        <BrowserRouter basename={'/'}>
            <ThemeProvider theme={SettingTheme}>
                <CssBaseline/>
                <LayoutAlert/>
                <LayoutHeader/>
                <LayoutMain>
                    <Routes>
                        <Route index element={<Navigate to={'dashboard/'}/>}/>
                        <Route path={`dashboard/*`} element={<ViewDashboard/>}/>
                        <Route path={`task/*`} element={<ViewTask/>}/>
                        <Route path={`error/*`} element={<ViewError/>}/>
                        <Route path={`*`} element={<ViewError/>}/>
                    </Routes>
                </LayoutMain>
                <LayoutFooter/>
            </ThemeProvider>
        </BrowserRouter>
    )
}
