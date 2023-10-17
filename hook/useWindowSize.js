import { useState, useEffect } from 'react';

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(
        {
            width: undefined
        }
    )
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleWindowSize = () => setWindowSize(
                windowSize = { width: window.innerWidth }
            )
            window.addEventListener("resize", handleWindowSize);
            handleWindowSize()
            return () => window.removeEventListener("resize", handleWindowSize);
        }
    }, [])
    return windowSize
}

