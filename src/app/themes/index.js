import {createTheme} from '@mui/material/styles'

export const MuiTheme = createTheme(
    {
        spacing: 4,
        shape: {
            borderRadius: 2
        },
        typography: {
            htmlFontSize: 16,
            fontSize: 14,
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 700
        }
    }
)
