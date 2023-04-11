import {Box, Typography} from '@mui/material'

export const Main = ({children}) => {
    const sxContainer = {
        border: theme => `1px solid ${theme.palette.divider}`
    }

    return (
        <Box component={'main'} sx={sxContainer}>
            <Typography component={'p'} variant={'body1'}>---Layout Main---</Typography>
            {children}
        </Box>
    )
}
