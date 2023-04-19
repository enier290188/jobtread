import { useCallback, useEffect, useRef, useState } from 'react'

const getIntervalInitial = () => Date.now()

export const useInterval = (isRunning = true, timeout = 1000) => {
    const [intervalState, setIntervalState] = useState(getIntervalInitial)
    const intervalRef = useRef(null)

    const startInterval = useCallback(() => {
        clearInterval(intervalRef.current)
        if (isRunning) {
            intervalRef.current = setInterval(() => setIntervalState(Date.now()), timeout)
        }
    }, [isRunning, timeout])

    const stopInterval = useCallback(() => {
        clearInterval(intervalRef.current)
    }, [])

    useEffect(() => {
        startInterval()

        return () => stopInterval() // Cleanup
    }, [startInterval, stopInterval])

    return [intervalState, startInterval, stopInterval]
}
