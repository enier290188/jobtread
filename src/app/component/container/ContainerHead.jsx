import {Box} from '@mui/material'

export const ContainerHead = ({children}) => {
    const sxContainer = {}

    return (
        <Box component={'div'} sx={sxContainer}>
            {children}
        </Box>
    )
}
