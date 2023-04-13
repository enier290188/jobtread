import {Box, Container, Link, Typography} from '@mui/material'
import {NavLink, useMatch, useResolvedPath} from 'react-router-dom'
import {SettingRoute} from '../../setting'

const LinkCustom = ({children, to, ...props}) => {
    const resolvedPath = useResolvedPath(to)
    const match = useMatch({path: resolvedPath.pathname, end: false})

    return (
        <Link component={NavLink} to={to} sx={{textDecoration: match ? 'underline' : 'none'}} {...props}>
            {children}
        </Link>
    )
}

export const Header = () => {
    const sxHeader = {
        backgroundColor: theme => theme.palette.primary.main,
        color: theme => theme.palette.common.white
    }
    const sxContainer = {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignContent: 'center',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    }

    return (
        <Box component={'header'} sx={sxHeader}>
            <Container component={'div'}>
                <Box component={'div'}>
                    <Typography component={'p'} variant={'body1'}>---Layout Header---</Typography>
                    <Box component={'div'} display={'flex'}>
                        <Box component={'div'} p={1}>
                            <LinkCustom to={`${SettingRoute.app.dashboard.TO}`}>Dashboard</LinkCustom>
                        </Box>
                        <Box component={'div'} p={1}>
                            <LinkCustom to={`${SettingRoute.app.task.TO}`}>Task</LinkCustom>
                        </Box>
                        <Box component={'div'} p={1}>
                            <LinkCustom to={`${SettingRoute.app.error.TO}`}>Error</LinkCustom>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
