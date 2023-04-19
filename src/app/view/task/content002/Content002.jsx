import { Box } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ComponentNavigateToAppErrorNotFound } from '../../../component'

const View = () => {
    return (
        <Box component={'div'}>
            <h3>View Content002</h3>
        </Box>
    )
}

export const Content002 = () => {
    return (
        <Routes>
            <Route path={``}>
                <Route index element={<View />} />
                <Route path={`*`} element={<ComponentNavigateToAppErrorNotFound />} />
            </Route>
        </Routes>
    )
}
