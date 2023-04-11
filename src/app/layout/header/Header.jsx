import {Box} from '@mui/material'
import {NavLink} from 'react-router-dom'

export const Header = () => {
    return (
        <header style={{border: '1px solid blue'}}>
            <p>Header Layout</p>
            <Box display={'flex'}>
                <Box p={1}>
                    <NavLink to={'/'}>Root</NavLink>
                </Box>
                <Box p={1}>
                    <NavLink to={'dashboard/'}>Dashboard</NavLink>
                </Box>
                <Box p={1}>
                    <NavLink to={'task/'}>Task</NavLink>
                </Box>
                <Box p={1}>
                    <NavLink to={'error/'}>Error</NavLink>
                </Box>
            </Box>
        </header>
    )
}
