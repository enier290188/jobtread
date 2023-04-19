import { useSyncExternalStore } from 'react'

export const useNavigatorOnline = () => {
    return useSyncExternalStore(subscribe, getSnapshot)
}

const getSnapshot = () => {
    return navigator.onLine
}

const subscribe = (callback) => {
    window.addEventListener('online', callback)
    window.addEventListener('offline', callback)
    return () => {
        window.removeEventListener('online', callback)
        window.removeEventListener('offline', callback)
    }
}
