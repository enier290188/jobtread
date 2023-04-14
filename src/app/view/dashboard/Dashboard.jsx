import {Dashboard as IconDashboard} from '@mui/icons-material'
import {Box, Divider, Typography} from '@mui/material'
import {Route, Routes} from 'react-router-dom'
import {ComponentNavigateToAppErrorNotFound} from '../../component'

const View = () => {
    const sxContainer = {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignContent: 'center',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        margin: theme => theme.spacing(0),
        padding: theme => theme.spacing(2),

        background: theme => theme.palette.common.white,
        border: theme => `1px solid ${theme.palette.divider}`
    }
    const sxTitle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
    const sxTitleIcon = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
    const sxTitleTypography = {}

    return (
        <Box component={'div'} sx={sxContainer}>
            <Box component={'div'} sx={sxTitle}>
                <Box component={'div'} sx={sxTitleIcon}>
                    <IconDashboard/>
                </Box>
                <Typography component={'span'} variant={'h6'} noWrap={true} sx={sxTitleTypography}>
                    {'Dashboard'}
                </Typography>
            </Box>
            <Divider/>
            ...
        </Box>
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
