import {Box, Link, Typography} from '@mui/material'
import {NavLink, useLocation} from 'react-router-dom'

export const Header = () => {
    const location = useLocation()

    const sxContainer = {
        border: theme => `1px solid ${theme.palette.divider}`
    }
    const sxLink = {}
    const sxLinkActive = {
        textDecoration: 'none'
    }

    console.log(location)

    return (
        <Box component={'header'} sx={sxContainer}>
            <Typography component={'p'} variant={'body1'}>---Layout Header---</Typography>
            <Box component={'div'} display={'flex'}>
                <Box component={'div'} p={1}>
                    <Link component={NavLink} to={`/`} sx={String(location.pathname).includes(`/`) ? {...sxLink, ...sxLinkActive} : sxLink}>Root</Link>
                </Box>
                <Box component={'div'} p={1}>
                    <Link component={NavLink} to={`/dashboard/`} sx={String(location.pathname).includes(`/dashboard/`) ? {...sxLink, ...sxLinkActive} : sxLink}>Dashboard</Link>
                </Box>
                <Box component={'div'} p={1}>
                    <Link component={NavLink} to={`/task/`} sx={String(location.pathname).includes(`/task/`) ? {...sxLink, ...sxLinkActive} : sxLink}>Task</Link>
                </Box>
                <Box component={'div'} p={1}>
                    <Link component={NavLink} to={`/error/`} sx={String(location.pathname).includes(`/error/`) ? {...sxLink, ...sxLinkActive} : sxLink}>Error</Link>
                </Box>
            </Box>
        </Box>
    )
}
