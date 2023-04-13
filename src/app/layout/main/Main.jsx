import {Box, Container, Typography} from '@mui/material'

export const Main = ({children}) => {
    const sxMain = {
        flexGrow: 1,
        backgroundColor: theme => theme.palette.grey['50'],
        overflow: 'hidden auto'
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
        <Box component={'main'} m={0} pt={2} pr={2} pb={2} pl={2} sx={sxMain}>
            <Container component={'div'}>
                <Box component={'div'} sx={sxContainer}>
                    <Typography component={'p'} variant={'body1'}>---Layout Main---</Typography>
                    {children}
                </Box>
            </Container>
        </Box>
    )
}
