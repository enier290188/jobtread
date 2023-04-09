import {CssBaseline, ThemeProvider} from '@mui/material'
import {Theme} from './themes'

export const App = () => {
    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline/>
            <h1>{`APP ${import.meta.env.VITE_APP_TITLE}`}</h1>
        </ThemeProvider>
    )
}
