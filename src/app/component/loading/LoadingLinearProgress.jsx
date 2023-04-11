import {Box, LinearProgress} from '@mui/material'

export const LoadingLinearProgress = () => {
    const sxContainer = {
        margin: theme => theme.spacing(0),
        padding: theme => theme.spacing(0)
    }
    const sxLinearProgress = {
        height: '1px'
    }

    return (
        <Box component={'div'} sx={sxContainer}>
            <LinearProgress component={'div'} variant={'indeterminate'} color={'primary'} sx={sxLinearProgress}/>
        </Box>
    )
}
