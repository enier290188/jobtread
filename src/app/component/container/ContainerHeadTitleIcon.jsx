import {Box} from '@mui/material'

export const ContainerHeadTitleIcon = ({children}) => {
    const sxContainer = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <Box component={'div'} sx={sxContainer}>
            {children}
        </Box>
    )
}
