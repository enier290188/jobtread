import {Box, Container, Typography} from '@mui/material'

export const Alert = () => {
    const sxAlert = {
        backgroundColor: theme => theme.palette.success.main,
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
        <Box component={'section'} sx={sxAlert}>
            <Container component={'div'} maxWidth={'xs'}>
                <Box component={'div'} sx={sxContainer}>
                    <Typography component={'p'} variant={'body1'}>---Layout Alert---</Typography>
                </Box>
            </Container>
        </Box>
    )
}
