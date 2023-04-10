import {CssBaseline, ThemeProvider} from '@mui/material'
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {useNavigatorOnline} from './hook'
import {Layout} from './layout'
import {Theme} from './theme'
import {DashboardView, ErrorView, TaskView} from './view'

export const App = () => {
    const isNavigatorOnline = useNavigatorOnline()

    return (
        <BrowserRouter>
            <ThemeProvider theme={Theme}>
                <CssBaseline/>
                <Routes>
                    <Route path={'/'} element={<Layout/>}>
                        <Route path={'dashboard'} element={<DashboardView/>}/>
                        <Route path={'task'} element={<TaskView/>}/>
                        <Route path={'*'} element={<ErrorView/>}/>
                    </Route>
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    )
}
