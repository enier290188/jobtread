import { Box } from '@mui/material'
import React from 'react'

export const ContainerHeadTitle = ({ children }) => {
    const sxContainer = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }

    return (
        <Box component={'div'} sx={sxContainer}>
            {children}
        </Box>
    )
}
