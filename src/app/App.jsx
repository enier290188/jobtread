import {CssBaseline, ThemeProvider} from '@mui/material'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {ComponentNavigateTo, ComponentNavigateToAppErrorNotFound} from './component'
import {LayoutAlert, LayoutFooter, LayoutHeader, LayoutMain} from './layout'
import {SettingRoute, SettingTheme} from './setting'
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
                        <Route path={`${SettingRoute.PATH}`}>
                            <Route index element={<ComponentNavigateTo to={`${SettingRoute.app.TO}`}/>}/>
                            <Route path={`${SettingRoute.app.PATH}`}>
                                <Route index element={<ComponentNavigateTo to={`${SettingRoute.app.dashboard.TO}`}/>}/>
                                <Route path={`${SettingRoute.app.dashboard.PATH}*`} element={<RouteDashboard/>}/>
                                <Route path={`${SettingRoute.app.task.PATH}*`} element={<RouteTask/>}/>
                                <Route path={`${SettingRoute.app.error.PATH}*`} element={<RouteError/>}/>
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
