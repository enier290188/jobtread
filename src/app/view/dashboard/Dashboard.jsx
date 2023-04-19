import { CleaningServices as IconCleaningServices, Dashboard as IconDashboard, PauseCircle as IconPauseCircle, PlayCircle as IconPlayCircle, Save as IconSave } from '@mui/icons-material'
import { Box, Button, ButtonGroup, Divider, Slider, Typography } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ComponentContainer, ComponentContainerContent, ComponentContainerHead, ComponentContainerHeadTitle, ComponentContainerHeadTitleIcon, ComponentContainerHeadTitleTypography, ComponentNavigateToAppErrorNotFound } from '../../component'
import { useInterval } from '../../hook'

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

const Task = ({ isRunning = true, timeout = 1000 }) => {
    const [responseTimeState, responseTimeDispatch] = React.useReducer(reducer, INITIAL_STATE, undefined)

    const [intervalIsRunning, setIntervalIsRunning] = React.useState(isRunning)
    const [intervalTimeout, setIntervalTimeout] = React.useState(timeout)
    const [interval, startInterval, stopInterval] = useInterval(intervalIsRunning, intervalTimeout)

    console.log(interval)
    console.log('')

    const handleIntervalClean = () => {}

    const handleIntervalPlay = () => {
        setIntervalIsRunning(true)
        startInterval()
    }

    const handleIntervalPause = () => {
        setIntervalIsRunning(false)
        stopInterval()
    }

    return (
        <Box component={'div'} mt={2} mr={0} mb={0} ml={0} p={2} border={1}>
            <Box component={'div'} sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <ButtonGroup component={'div'} variant={'contained'} size={'small'}>
                    <Button component={'div'} startIcon={<IconCleaningServices />} onClick={handleIntervalClean}>
                        {'Clean'}
                    </Button>
                    <Button component={'div'} startIcon={<IconPlayCircle />} disabled={intervalIsRunning === true} onClick={handleIntervalPlay}>
                        {'Play'}
                    </Button>
                    <Button component={'div'} startIcon={<IconPauseCircle />} disabled={intervalIsRunning === false} onClick={handleIntervalPause}>
                        {'Pause'}
                    </Button>
                </ButtonGroup>
                <Box component={'div'} p={2} />
                <Slider component={'div'} min={100} max={5000} step={100} marks={true} valueLabelDisplay={'on'} valueLabelFormat={(value) => `${value} milliseconds`} value={intervalTimeout} onChange={(event) => setIntervalTimeout(event.target.value)} />
                <Box component={'div'} p={2} />
                <ButtonGroup component={'div'} variant={'contained'} size={'small'}>
                    <Button component={'div'} startIcon={<IconSave />}>
                        {'Save'}
                    </Button>
                </ButtonGroup>
            </Box>
            <Box component={'div'} my={2}>
                <Divider />
            </Box>
            <Typography component={'p'} variant={'body1'}>
                {interval}
            </Typography>
        </Box>
    )
}

const View = () => {
    return (
        <ComponentContainer>
            <ComponentContainerHead>
                <ComponentContainerHeadTitle>
                    <ComponentContainerHeadTitleIcon>
                        <IconDashboard />
                    </ComponentContainerHeadTitleIcon>
                    <ComponentContainerHeadTitleTypography>{'Dashboard'}</ComponentContainerHeadTitleTypography>
                </ComponentContainerHeadTitle>
            </ComponentContainerHead>
            <Divider />
            <ComponentContainerContent>
                <Task isRunning={true} timeout={1000} />
                <Task isRunning={true} timeout={2000} />
                <Task isRunning={true} timeout={3000} />
                <Task isRunning={true} timeout={4000} />
                <Task isRunning={true} timeout={5000} />
            </ComponentContainerContent>
        </ComponentContainer>
    )
}

export const Dashboard = () => {
    return (
        <Routes>
            <Route path={``}>
                <Route index element={<View />} />
                <Route path={`*`} element={<ComponentNavigateToAppErrorNotFound />} />
            </Route>
        </Routes>
    )
}
