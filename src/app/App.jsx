import {CssBaseline, ThemeProvider} from '@mui/material'
import {useNavigatorOnline} from './hook'
import {Theme} from './theme'

export const App = () => {
    const isNavigatorOnline = useNavigatorOnline()

    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline/>
            <h1>{`APP ${import.meta.env.VITE_APP_TITLE}`}</h1>
        </ThemeProvider>
    )
}
