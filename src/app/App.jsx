import {CssBaseline, ThemeProvider} from '@mui/material'
import React from 'react'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import {LayoutAlert, LayoutFooter, LayoutHeader, LayoutMain} from './layout'
import {SettingTheme} from './setting'
import {RouteError, ViewDashboard, ViewTask} from './view'

export const App = () => {
    return (
        <BrowserRouter basename={'/'}>
            <ThemeProvider theme={SettingTheme}>
                <CssBaseline/>
                <LayoutAlert/>
                <LayoutHeader/>
                <LayoutMain>
                    <Routes>
                        <Route path={``}>
                            <Route index element={<Navigate to={'app/'}/>}/>
                            <Route path={`app/`}>
                                <Route index element={<Navigate to={'dashboard/'}/>}/>
                                <Route path={`dashboard/*`} element={<ViewDashboard/>}/>
                                <Route path={`task/*`} element={<ViewTask/>}/>
                                <Route path={`error/*`} element={<RouteError/>}/>
                                <Route path={`*`} element={<Navigate to={'/app/error/not-found/'}/>}/>
                            </Route>
                            <Route path={`*`} element={<Navigate to={'/app/error/not-found/'}/>}/>
                        </Route>
                    </Routes>
                </LayoutMain>
                <LayoutFooter/>
            </ThemeProvider>
        </BrowserRouter>
    )
}
