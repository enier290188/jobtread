import {CssBaseline as MuiCssBaseline, ThemeProvider as MuiThemeProvider} from '@mui/material'
import {MuiTheme} from './themes/index.js'

export const App = () => {
    return (
        <MuiThemeProvider theme={MuiTheme}>
            <MuiCssBaseline/>
            <h1>{`APP ${import.meta.env.VITE_APP_TITLE}`}</h1>
        </MuiThemeProvider>
    )
}
