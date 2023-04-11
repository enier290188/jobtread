import {Box, Link, Typography} from '@mui/material'
import {NavLink, useMatch, useResolvedPath} from 'react-router-dom'

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
    const sxContainer = {
        border: theme => `1px solid ${theme.palette.divider}`
    }

    return (
        <Box component={'header'} sx={sxContainer}>
            <Typography component={'p'} variant={'body1'}>---Layout Header---</Typography>
            <Box component={'div'} display={'flex'}>
                <Box component={'div'} p={1}>
                    <LinkCustom to={`/`}>Root</LinkCustom>
                </Box>
                <Box component={'div'} p={1}>
                    <LinkCustom to={`/app/dashboard/`}>Dashboard</LinkCustom>
                </Box>
                <Box component={'div'} p={1}>
                    <LinkCustom to={`/app/task/`}>Task</LinkCustom>
                </Box>
                <Box component={'div'} p={1}>
                    <LinkCustom to={`/app/error/`}>Error</LinkCustom>
                </Box>
            </Box>
        </Box>
    )
}
