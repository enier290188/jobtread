import {Box, Typography} from '@mui/material'

export const Alert = () => {
    const sxContainer = {
        border: theme => `1px solid ${theme.palette.divider}`
    }

    return (
        <Box component={'section'} sx={sxContainer}>
            <Typography component={'p'} variant={'body1'}>---Layout Alert---</Typography>
        </Box>
    )
}
