// Material UI is designed to use the Roboto font by default.
// Fontsource can be configured to load specific subsets, weights and styles.
// Material UI's default typography configuration relies only on the 300, 400, 500, and 700 font weights.
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none'
                }
            }
        },
        MuiContainer: {
            defaultProps: {
                disableGutters: true
            }
        }
    },
    palette: {
        common: {
            black: '#000000',
            white: '#ffffff'
        },
        primary: {
            dark: '#2e7031',
            main: '#43a047',
            light: '#68b36b',
            contrastText: '#ffffff'
        },
        secondary: {
            dark: '#124116',
            main: '#1b5e20',
            light: '#487e4c',
            contrastText: '#ffffff'
        }
    },
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
})
