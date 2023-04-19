import { Typography } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ComponentNavigateToAppErrorNotFound } from '../../../component'

const View = () => {
    return (
        <>
            <Typography component={'h5'} variant={'h5'}>
                <i>- Error 404 -</i>
            </Typography>
            <Typography component={'h6'} variant={'h6'}>
                {`The page you're looking for can't be found.`}
            </Typography>
        </>
    )
}

export const NotFound = () => {
    return (
        <Routes>
            <Route path={``}>
                <Route index element={<View />} />
                <Route path={`*`} element={<ComponentNavigateToAppErrorNotFound />} />
            </Route>
        </Routes>
    )
}
