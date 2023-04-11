import {CssBaseline, ThemeProvider} from '@mui/material'
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {ComponentNavigateTo, ComponentNavigateToAppErrorNotFound} from './component'
import {LayoutAlert, LayoutFooter, LayoutHeader, LayoutMain} from './layout'
import {SettingTheme} from './setting'
import {RouteDashboard, RouteError, RouteTask} from './view'

export const App = () => {
    return (
        <BrowserRouter basename={'/'}>
            <ThemeProvider theme={SettingTheme}>
                <CssBaseline/>
                <LayoutAlert/>
                <LayoutHeader/>
                <LayoutMain>
                    <Routes>
                        <Route path={`/`}>
                            <Route index element={<ComponentNavigateTo to={'app/'}/>}/>
                            <Route path={`app/`}>
                                <Route index element={<ComponentNavigateTo to={'dashboard/'}/>}/>
                                <Route path={`dashboard/*`} element={<RouteDashboard/>}/>
                                <Route path={`task/*`} element={<RouteTask/>}/>
                                <Route path={`error/*`} element={<RouteError/>}/>
                                <Route path={`*`} element={<ComponentNavigateToAppErrorNotFound/>}/>
                            </Route>
                            <Route path={`*`} element={<ComponentNavigateToAppErrorNotFound/>}/>
                        </Route>
                    </Routes>
                </LayoutMain>
                <LayoutFooter/>
            </ThemeProvider>
        </BrowserRouter>
    )
}
