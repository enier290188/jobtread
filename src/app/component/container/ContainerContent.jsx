import {Box} from '@mui/material'

export const ContainerContent = ({children}) => {
    const sxContainer = {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignContent: 'center',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    }

    return (
        <Box component={'div'} sx={sxContainer}>
            {children}
        </Box>
    )
}
