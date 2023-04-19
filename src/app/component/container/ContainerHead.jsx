import { Box } from '@mui/material'
import React from 'react'

export const ContainerHead = ({ children }) => {
    const sxContainer = {}

    return (
        <Box component={'div'} sx={sxContainer}>
            {children}
        </Box>
    )
}
