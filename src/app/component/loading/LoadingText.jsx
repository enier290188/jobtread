import {Box, CircularProgress, Typography} from '@mui/material'

export const LoadingText = () => {
    const sxContainer = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: theme => theme.spacing(0),
        padding: theme => theme.spacing(0),
        backgroundColor: 'transparent',
        color: theme => theme.palette.grey[600]
    }
    const sxCircularProgress = {
        margin: theme => theme.spacing(0, 1, 0, 0),
        padding: theme => theme.spacing(0)
    }

    return (
        <Box component={'div'} sx={sxContainer}>
            <CircularProgress component={'div'} variant={'indeterminate'} color={'inherit'} size={'1em'} sx={sxCircularProgress}/>
            <Typography component={'p'} variant={'body2'}>loading...</Typography>
        </Box>
    )
}
