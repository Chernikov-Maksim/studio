import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useWindowSize } from '/hook'

export const useFixedHashScroll = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const { width } = useWindowSize()
    const isWidth = !!width

    const { push, asPath } = useRouter()
    const isHasHashOfAsPath = asPath.includes('#')

    useEffect(() => {
        if (isHasHashOfAsPath) {
            setIsScrolled(true)
        }
    }, [isHasHashOfAsPath])

    useEffect(() => {
        if (isScrolled && isWidth) {
            setIsScrolled(false)
            push(asPath)
        }
    }, [isScrolled, isWidth])

}

