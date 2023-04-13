import {Box, Container, Typography} from '@mui/material'

export const Footer = () => {
    const sxFooter = {
        backgroundColor: theme => theme.palette.secondary.main,
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

    const date = new Date()

    return (
        <Box component={'footer'} sx={sxFooter}>
            <Container component={'div'}>
                <Box component={'div'} sx={sxContainer}>
                    <Typography component={'p'} variant={'body2'} textAlign={'center'}>{date.getFullYear()}, Celsitud LLC. All rights reserved.</Typography>
                </Box>
            </Container>
        </Box>
    )
}
