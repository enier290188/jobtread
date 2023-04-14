import {useEffect, useRef, useState} from 'react'

export const useInterval = (timeout = 1000) => {
    const [date, setDate] = useState(() => new Date())
    const intervalRef = useRef(null)
    useEffect(() => {
        intervalRef.current = setInterval(() => setDate(new Date()), timeout)
        return () => clearInterval(intervalRef.current) // Cleanup
    }, [])
    return date
}
