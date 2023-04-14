import {Dashboard as IconDashboard} from '@mui/icons-material'
import {Divider} from '@mui/material'
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {ComponentContainer, ComponentContainerContent, ComponentContainerHead, ComponentContainerHeadTitle, ComponentContainerHeadTitleIcon, ComponentContainerHeadTitleTypography, ComponentNavigateToAppErrorNotFound} from '../../component'
import {useInterval} from '../../hook'

const INITIAL_STATE = {
    isFetching: true,
    error: false,
    data: {}
}
const ACTION = {
    FETCH: 'FETCH',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_ERROR: 'FETCH_ERROR'
}
const reducer = (state, action) => {
    switch (action.type) {
        case ACTION.FETCH:
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case ACTION.FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: false,
                data: action.payload
            }
        case ACTION.FETCH_ERROR:
            return {
                ...state,
                isFetching: false,
                error: true,
                data: {}
            }
        default:
            return state
    }
}

const Task = () => {
    const [responseTimeState, responseTimeDispatch] = React.useReducer(reducer, INITIAL_STATE, undefined)
    const [timeout, setTimeout] = React.useState(1000)
    const [interval] = useInterval(timeout)

    console.log(interval)

    return (
        <>{interval}</>
    )
}

const View = () => {
    return (
        <ComponentContainer>
            <ComponentContainerHead>
                <ComponentContainerHeadTitle>
                    <ComponentContainerHeadTitleIcon>
                        <IconDashboard/>
                    </ComponentContainerHeadTitleIcon>
                    <ComponentContainerHeadTitleTypography>
                        {'Dashboard'}
                    </ComponentContainerHeadTitleTypography>
                </ComponentContainerHeadTitle>
            </ComponentContainerHead>
            <Divider/>
            <ComponentContainerContent>
                <Task/>
            </ComponentContainerContent>
        </ComponentContainer>
    )
}

export const Dashboard = () => {
    return (
        <Routes>
            <Route path={``}>
                <Route index element={<View/>}/>
                <Route path={`*`} element={<ComponentNavigateToAppErrorNotFound/>}/>
            </Route>
        </Routes>
    )
}
