import {Box, Typography} from '@mui/material'

export const Footer = () => {
    const sxContainer = {
        border: theme => `1px solid ${theme.palette.divider}`
    }

    return (
        <Box component={'footer'} sx={sxContainer}>
            <Typography component={'p'} variant={'body1'}>---Layout Footer---</Typography>
        </Box>
    )
}
