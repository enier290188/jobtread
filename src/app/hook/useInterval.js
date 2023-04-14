import {useEffect, useRef, useState} from 'react'

const getIntervalInitial = () => Date.now()

export const useInterval = (timeout = 1000) => {
    const [intervalState, setIntervalState] = useState(getIntervalInitial)
    const intervalRef = useRef(null)

    const startInterval = () => {
        if (intervalRef.current) {
            stopInterval()
        }
        intervalRef.current = setInterval(() => setIntervalState(Date.now()), timeout)
    }

    const stopInterval = () => {
        clearInterval(intervalRef.current)
    }

    useEffect(() => {
        intervalRef.current = setInterval(() => setIntervalState(Date.now()), timeout)

        return () => clearInterval(intervalRef.current) // Cleanup
    }, [])

    return [intervalState, startInterval, stopInterval]
}
