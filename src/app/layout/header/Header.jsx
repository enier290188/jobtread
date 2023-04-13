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

const MobileBrand = () => {
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
        width: theme => theme.spacing(11),
        height: theme => theme.spacing(11)
    }
    const sxTypography = {
        display: {xs: 'none', sm: 'block'}
    }

    return (
        <Box component={NavLink} to={SettingRoute.app.TO} sx={sxContainer}>
            <Avatar component={'span'} variant={'square'} src={AssetSvgBrand} sx={sxAvatar}/>
            <Typography component={'span'} variant={'h4'} sx={sxTypography}>JobTread</Typography>
        </Box>
    )
}

const MobileContent = () => {
    const sxContent = {
        display: {xs: 'flex', sm: 'none'},
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }

    return (
        <Box component={'div'} sx={sxContent}>
            ...
        </Box>
    )
}

const DesktopContentLeftBrand = () => {
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
        width: theme => theme.spacing(11),
        height: theme => theme.spacing(11)
    }
    const sxTypography = {}

    return (
        <Link component={NavLink} to={SettingRoute.app.TO} sx={sxContainer}>
            <Avatar component={'span'} variant={'square'} src={AssetSvgBrand} sx={sxAvatar}/>
            <Typography component={'span'} variant={'h4'} sx={sxTypography}>JobTread</Typography>
        </Link>
    )
}

const DesktopContentLeftLink = ({children, to, ...props}) => {
    const resolvedPath = useResolvedPath(to)
    const match = useMatch({path: resolvedPath.pathname, end: false})

    return (
        <Link component={NavLink} to={to} sx={{textDecoration: match ? 'underline' : 'none', color: theme => theme.palette.common.white}} {...props}>
            {children}
        </Link>
    )
}

const DesktopContentLeft = () => {
    const sxContainer = {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        alignItems: 'center',

        border: '1px solid white'
    }

    return (
        <Box component={'div'} sx={sxContainer}>
            <DesktopContentLeftBrand/>
            <Box component={'div'} mx={2}/>
            <Box component={'div'} p={1}>
                <LinkCustom to={`${SettingRoute.app.dashboard.TO}`}>Dashboard</LinkCustom>
            </Box>
            <Box component={'div'} p={1}>
                <LinkCustom to={`${SettingRoute.app.task.TO}`}>Tasks</LinkCustom>
            </Box>
            <Box component={'div'} p={1}>
                <LinkCustom to={`${SettingRoute.app.error.TO}`}>Error</LinkCustom>
            </Box>
        </Box>
    )
}

const DesktopContentRight = () => {
    const sxContainer = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        alignItems: 'center',

        border: '1px solid white'
    }

    return (
        <Box component={'div'} sx={sxContainer}>
            <Box component={'div'} p={1}>
                <LinkCustom to={`${SettingRoute.app.dashboard.TO}`}>Dashboard</LinkCustom>
            </Box>
            <Box component={'div'} p={1}>
                <LinkCustom to={`${SettingRoute.app.task.TO}`}>Tasks</LinkCustom>
            </Box>
            <Box component={'div'} p={1}>
                <LinkCustom to={`${SettingRoute.app.error.TO}`}>Error</LinkCustom>
            </Box>
        </Box>
    )
}

const DesktopContent = () => {
    const sxContainer = {
        display: {xs: 'none', sm: 'flex'},
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }

    return (
        <Box component={'div'} sx={sxContainer}>
            <DesktopContentLeft/>
            <DesktopContentRight/>
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

    return (
        <Box component={'header'} m={0} pt={1} pr={2} pb={1} pl={2} sx={sxHeader}>
            <Container component={'div'}>
                <Box component={'div'} sx={sxContainer}>
                    <MobileContent/>
                    <DesktopContent/>
                </Box>
            </Container>
        </Box>
    )
}
