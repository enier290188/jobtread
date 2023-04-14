import {Task as IconTask} from '@mui/icons-material'
import {Divider} from '@mui/material'
import {Outlet, Route, Routes} from 'react-router-dom'
import {ComponentContainer, ComponentContainerContent, ComponentContainerHead, ComponentContainerHeadTitle, ComponentContainerHeadTitleIcon, ComponentContainerHeadTitleTypography, ComponentNavigateToAppErrorNotFound} from '../../component'
import {SettingRoute} from '../../setting'
import {RouteContent001} from './content001'
import {RouteContent002} from './content002'
import {RouteContent003} from './content003'

const Layout = () => {
    return (
        <Outlet/>
    )
}

const View = () => {
    return (
        <ComponentContainer>
            <ComponentContainerHead>
                <ComponentContainerHeadTitle>
                    <ComponentContainerHeadTitleIcon>
                        <IconTask/>
                    </ComponentContainerHeadTitleIcon>
                    <ComponentContainerHeadTitleTypography>
                        {'Tasks'}
                    </ComponentContainerHeadTitleTypography>
                </ComponentContainerHeadTitle>
            </ComponentContainerHead>
            <Divider/>
            <ComponentContainerContent>
                ...
            </ComponentContainerContent>
        </ComponentContainer>
    )
}

export const Task = () => {
    return (
        <Routes>
            <Route path={``} element={<Layout/>}>
                <Route index element={<View/>}/>
                <Route path={`${SettingRoute.app.task.content001.PATH}*`} element={<RouteContent001/>}/>
                <Route path={`${SettingRoute.app.task.content002.PATH}*`} element={<RouteContent002/>}/>
                <Route path={`${SettingRoute.app.task.content003.PATH}*`} element={<RouteContent003/>}/>
                <Route path={`*`} element={<ComponentNavigateToAppErrorNotFound/>}/>
            </Route>
        </Routes>
    )
}
