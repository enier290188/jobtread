import {Box} from '@mui/material'

export const ContainerContent = ({children}) => {
    const sxContainer = {}

    return (
        <Box component={'div'} sx={sxContainer}>
            {children}
        </Box>
    )
}
