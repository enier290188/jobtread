import { Box, useMediaQuery } from '@mui/material'
import React from 'react'

export const Container = ({ children }) => {
    const mediaQuerySmDown = useMediaQuery((theme) => theme.breakpoints.down('md'))

    const sxContainer = {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignContent: 'center',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        margin: (theme) => theme.spacing(0),
        padding: (theme) => theme.spacing(2),
        backgroundColor: (theme) => theme.palette.common.white,
        border: (theme) => (mediaQuerySmDown ? `1px solid transparent` : `1px solid ${theme.palette.divider}`)
    }

    return (
        <Box component={'div'} sx={sxContainer}>
            {children}
        </Box>
    )
}
