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
        <Box component={'footer'} m={0} pt={0} pr={2} pb={0} pl={2} sx={sxFooter}>
            <Container component={'div'}>
                <Box component={'div'} sx={sxContainer}>
                    <Typography component={'p'} variant={'caption'} textAlign={'center'}>{date.getFullYear()}, Celsitud LLC. All rights reserved.</Typography>
                </Box>
            </Container>
        </Box>
    )
}
