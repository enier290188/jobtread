import {CssBaseline, ThemeProvider} from '@mui/material'
import {useNavigatorOnline} from './hooks/'
import {Theme} from './themes'

export const App = () => {
    const isNavigatorOnline = useNavigatorOnline()

    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline/>
            <h1>{`APP ${import.meta.env.VITE_APP_TITLE}`}</h1>
        </ThemeProvider>
    )
}
