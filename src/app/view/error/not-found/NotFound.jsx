import {Box} from '@mui/material'
import {Route, Routes} from 'react-router-dom'

const View = () => {
    return (
        <Box component={'div'}>
            <h3>View NotFound</h3>
        </Box>
    )
}

export const NotFound = () => {
    return (
        <Routes>
            <Route path={`*`} element={<View/>}/>
        </Routes>
    )
}
