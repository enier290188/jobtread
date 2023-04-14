import {Typography} from '@mui/material'

export const ContainerHeadTitleTypography = ({children}) => {
    const sxContainer = {}

    return (
        <Typography component={'span'} variant={'h6'} noWrap={true} sx={sxContainer}>
            {children}
        </Typography>
    )
}
