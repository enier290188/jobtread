import {Avatar, Box, Container, Link, Typography} from '@mui/material'
import {NavLink, useMatch, useResolvedPath} from 'react-router-dom'
import {AssetSvgBrand} from '../../asset'
import {SettingRoute} from '../../setting'

const LinkCustom = ({children, to, ...props}) => {
    const resolvedPath = useResolvedPath(to)
    const match = useMatch({path: resolvedPath.pathname, end: false})

    return (
        <Link component={NavLink} to={to} sx={{textDecoration: match ? 'underline' : 'none', color: theme => theme.palette.common.white}} {...props}>
            {children}
        </Link>
    )
}

const Brand = () => {
    const sxContainer = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textDecoration: 'none',
        color: theme => theme.palette.common.white
    }
    const sxAvatar = {
        width: theme => theme.spacing(10),
        height: theme => theme.spacing(10)
    }

    return (
        <Box component={NavLink} to={SettingRoute.app.TO} sx={sxContainer}>
            <Avatar component={'span'} variant={'square'} src={AssetSvgBrand} sx={sxAvatar}/>
            <Typography component={'span'} variant={'h4'}>JobTread</Typography>
        </Box>
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
    const sxContent = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
    const sxContentLeft = {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
    const sxContentRight = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }

    return (
        <Box component={'header'} m={0} pt={1} pr={2} pb={1} pl={2} sx={sxHeader}>
            <Container component={'div'}>
                <Box component={'div'} sx={sxContainer}>
                    <Box component={'div'} sx={sxContent}>
                        <Box component={'div'} sx={sxContentLeft}>
                            <Brand/>
                            <Box component={'div'} mx={2}/>
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
                        <Box component={'div'} sx={sxContentRight}>
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
                </Box>
            </Container>
        </Box>
    )
}
