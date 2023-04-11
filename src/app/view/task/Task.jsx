import {Box} from '@mui/material'
import {Navigate, Route, Routes} from 'react-router-dom'

const View = () => {
    return (
        <Box component={'div'}>
            <h2>View Task</h2>
        </Box>
    )
}

export const Task = () => {
    return (
        <Routes>
            <Route path={``}>
                <Route index element={<View/>}/>
                <Route path={`*`} element={<Navigate to={`/app/error/not-found/`}/>}/>
            </Route>
        </Routes>
    )
}
