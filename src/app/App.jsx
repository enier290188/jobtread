import {CssBaseline, ThemeProvider} from '@mui/material'
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {ComponentNavigateTo, ComponentNavigateToAppErrorNotFound} from './component/index.js'
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
                        <Route path={`/`}>
                            <Route index element={<ComponentNavigateTo to={'app/'}/>}/>
                            <Route path={`app/`}>
                                <Route index element={<ComponentNavigateTo to={'dashboard/'}/>}/>
                                <Route path={`dashboard/*`} element={<ViewDashboard/>}/>
                                <Route path={`task/*`} element={<ViewTask/>}/>
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
