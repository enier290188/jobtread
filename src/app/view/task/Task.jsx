import {Box} from '@mui/material'
import {Route, Routes} from 'react-router-dom'
import {ComponentNavigateToAppErrorNotFound} from '../../component'

const View = () => {
    return (
        <Box component={'div'}>
            <h3>View Task</h3>
        </Box>
    )
}

export const Task = () => {
    return (
        <Routes>
            <Route path={``}>
                <Route index element={<View/>}/>
                <Route path={`*`} element={<ComponentNavigateToAppErrorNotFound/>}/>
            </Route>
        </Routes>
    )
}
