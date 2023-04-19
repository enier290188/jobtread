import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export const Footer = () => {
    const sxFooter = {
        margin: (theme) => theme.spacing(0),
        padding: (theme) => theme.spacing(0, 2, 0, 2),
        backgroundColor: (theme) => theme.palette.secondary.main,
        color: (theme) => theme.palette.common.white
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
                    <Typography component={'p'} variant={'caption'} textAlign={'center'}>
                        {date.getFullYear()}, Celsitud LLC. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}
