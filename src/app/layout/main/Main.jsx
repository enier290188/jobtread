import { Box, Container, useMediaQuery } from '@mui/material'
import React from 'react'

export const Main = ({ children }) => {
    const mediaQuerySmDown = useMediaQuery((theme) => theme.breakpoints.down('md'))

    const sxMain = {
        flexGrow: 1,
        margin: (theme) => theme.spacing(0),
        padding: (theme) => ({
            sm: theme.spacing(0),
            md: theme.spacing(2)
        }),
        backgroundColor: (theme) => (mediaQuerySmDown ? theme.palette.common.white : theme.palette.grey['100']),
        color: (theme) => theme.palette.text.primary,
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
        <Box component={'main'} sx={sxMain}>
            <Container component={'div'}>
                <Box component={'div'} sx={sxContainer}>
                    {children}
                </Box>
            </Container>
        </Box>
    )
}
