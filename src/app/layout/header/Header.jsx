import {Dashboard as IconDashboard, Task as IconTask, Translate as IconTranslate} from '@mui/icons-material'
import {Avatar, Box, Button, Container, Typography} from '@mui/material'
import {NavLink, useMatch, useResolvedPath} from 'react-router-dom'
import {AssetSvgBrand} from '../../asset'
import {SettingRoute} from '../../setting'

const CustomBrand = ({children}) => {
    const sxContainer = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        color: theme => theme.palette.common.white
    }

    return (
        <Button component={NavLink} variant={'text'} to={SettingRoute.app.TO} sx={sxContainer}>
            {children}
        </Button>
    )
}

const CustomBrandIcon = () => {
    const sxContainer = {
        width: theme => theme.spacing(10),
        height: theme => theme.spacing(10)
    }

    return (
        <Avatar component={'span'} variant={'square'} src={AssetSvgBrand} sx={sxContainer}/>
    )
}

const CustomBrandTypography = () => {
    const sxContainer = {}

    return (
        <Typography component={'span'} variant={'h4'} noWrap={true} sx={sxContainer}>
            {`JobTread`}
        </Typography>
    )
}

const CustomLink = ({children, to, ...props}) => {
    const resolvedPath = useResolvedPath(to)
    const match = useMatch({path: resolvedPath.pathname, end: false})

    const sxContainer = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: match ? 'underline' : 'none',
        color: theme => theme.palette.common.white,
        '&:hover': {
            textDecoration: match ? 'underline' : 'none'
        }
    }

    return (
        <Button component={NavLink} variant={'text'} to={to} sx={sxContainer} {...props}>
            {children}
        </Button>
    )
}

const CustomLinkIcon = ({children}) => {
    const sxContainer = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <Box component={'span'} sx={sxContainer}>
            {children}
        </Box>
    )
}

const CustomLinkTypography = ({children}) => {
    const sxContainer = {}

    return (
        <Typography component={'span'} variant={'body1'} noWrap={true} sx={sxContainer}>
            {children}
        </Typography>
    )
}

const MobileContentTop = () => {
    const sxContainer = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }

    return (
        <Box component={'div'} sx={sxContainer}>
            <CustomBrand>
                <CustomBrandIcon/>
                <CustomBrandTypography/>
            </CustomBrand>
            <Box component={'span'} margin={'auto'}/>
            <CustomLink to={`${SettingRoute.app.error.TO}`} disabled={true}>
                <CustomLinkIcon>
                    <IconTranslate/>
                </CustomLinkIcon>
                <CustomLinkTypography>
                    {'English'}
                </CustomLinkTypography>
            </CustomLink>
        </Box>
    )
}

const MobileContentBottom = () => {
    const sxContainer = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }

    return (
        <Box component={'div'} sx={sxContainer}>
            <CustomLink to={`${SettingRoute.app.dashboard.TO}`}>
                <CustomLinkIcon>
                    <IconDashboard/>
                </CustomLinkIcon>
                <CustomLinkTypography>
                    {'Dashboard'}
                </CustomLinkTypography>
            </CustomLink>
            <CustomLink to={`${SettingRoute.app.task.TO}`}>
                <CustomLinkIcon>
                    <IconTask/>
                </CustomLinkIcon>
                <CustomLinkTypography>
                    {'Tasks'}
                </CustomLinkTypography>
            </CustomLink>
        </Box>
    )
}

const MobileContent = () => {
    const sxContainer = {
        display: {xs: 'flex', md: 'none'},
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignContent: 'center',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    }

    return (
        <Box component={'div'} sx={sxContainer}>
            <MobileContentTop/>
            <MobileContentBottom/>
        </Box>
    )
}

const DesktopContentLeft = () => {
    const sxContainer = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }

    return (
        <Box component={'div'} sx={sxContainer}>
            <CustomBrand>
                <CustomBrandIcon/>
                <CustomBrandTypography/>
            </CustomBrand>
            <Box component={'span'} mr={4}/>
            <CustomLink to={`${SettingRoute.app.dashboard.TO}`}>
                <CustomLinkIcon>
                    <IconDashboard/>
                </CustomLinkIcon>
                <CustomLinkTypography>
                    {'Dashboard'}
                </CustomLinkTypography>
            </CustomLink>
            <CustomLink to={`${SettingRoute.app.task.TO}`}>
                <CustomLinkIcon>
                    <IconTask/>
                </CustomLinkIcon>
                <CustomLinkTypography>
                    {'Tasks'}
                </CustomLinkTypography>
            </CustomLink>
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
        alignItems: 'center'
    }

    return (
        <Box component={'div'} sx={sxContainer}>
            <CustomLink to={`${SettingRoute.app.error.TO}`} disabled={true}>
                <CustomLinkIcon>
                    <IconTranslate/>
                </CustomLinkIcon>
                <CustomLinkTypography>
                    {'English'}
                </CustomLinkTypography>
            </CustomLink>
        </Box>
    )
}

const DesktopContent = () => {
    const sxContainer = {
        display: {xs: 'none', md: 'flex'},
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }

    return (
        <Box component={'div'} sx={sxContainer}>
            <DesktopContentLeft/>
            <Box component={'div'} marginX={'auto'}/>
            <DesktopContentRight/>
        </Box>
    )
}

export const Header = () => {
    const sxHeader = {
        margin: theme => theme.spacing(0),
        padding: theme => theme.spacing(0, 2, 0, 2),
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
                <Box component={'div'} sx={sxContainer}>
                    <MobileContent/>
                    <DesktopContent/>
                </Box>
            </Container>
        </Box>
    )
}
