import {CssBaseline, ThemeProvider} from '@mui/material'
import React from 'react'
import {BrowserRouter, Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {Alert as AlertLayout} from './layout/alert/Alert.jsx'
import {Footer as FooterLayout} from './layout/footer/Footer.jsx'
import {Header as HeaderLayout} from './layout/header/Header.jsx'
import {Main as MainLayout} from './layout/main/Main.jsx'
import {theme} from './setting/theme/theme.js'
import {Dashboard as DashboardView} from './view/dashboard/Dashboard.jsx'
import {Error404 as Error404View} from './view/error/404/Error404.jsx'
import {ErrorBoundary as ErrorBoundaryView} from './view/error/boundary/ErrorBoundary.jsx'
import {Create as TaskCreateView} from './view/task/create/Create.jsx'
import {Update as TaskUpdateView} from './view/task/update/Update.jsx'
import {Delete as TaskDeleteView} from './view/task/delete/Delete.jsx'
import {Task as TaskView} from './view/task/Task.jsx'

export const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <AlertLayout/>
                <HeaderLayout/>
                <Routes>
                    <Route path={'/'} element={<MainLayout><Outlet/></MainLayout>} errorElement={<ErrorBoundaryView/>}>
                        <Route path={''} element={<Navigate to={'dashboard'}/>}/>
                        <Route path={'dashboard'} element={<DashboardView/>}/>
                        <Route path={'task'} element={<TaskView/>}>
                            <Route path={'create'} element={<TaskCreateView/>}/>
                            <Route path={':id/update'} element={<TaskUpdateView/>}/>
                            <Route path={':id/delete'} element={<TaskDeleteView/>}/>
                        </Route>
                        <Route path={'*'} element={<Error404View/>}/>
                    </Route>
                </Routes>
                <FooterLayout/>
            </ThemeProvider>
        </BrowserRouter>
    )
}
