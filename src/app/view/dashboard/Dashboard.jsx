import {Dashboard as IconDashboard} from '@mui/icons-material'
import {Divider} from '@mui/material'
import {Route, Routes} from 'react-router-dom'
import {ComponentContainer, ComponentContainerContent, ComponentContainerHead, ComponentContainerHeadTitle, ComponentContainerHeadTitleIcon, ComponentContainerHeadTitleTypography, ComponentNavigateToAppErrorNotFound} from '../../component'

const View = () => {
    return (
        <ComponentContainer>
            <ComponentContainerHead>
                <ComponentContainerHeadTitle>
                    <ComponentContainerHeadTitleIcon>
                        <IconDashboard/>
                    </ComponentContainerHeadTitleIcon>
                    <ComponentContainerHeadTitleTypography>
                        {'Dashboard'}
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

export const Dashboard = () => {
    return (
        <Routes>
            <Route path={``}>
                <Route index element={<View/>}/>
                <Route path={`*`} element={<ComponentNavigateToAppErrorNotFound/>}/>
            </Route>
        </Routes>
    )
}
