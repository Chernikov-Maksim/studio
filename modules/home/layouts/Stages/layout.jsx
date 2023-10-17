import { useWindowSize } from '/hook'

import { Desktop } from './Desktop'
import { Tablet } from './Tablet'
import { Mobile } from './Mobile'
import { SmallMobile } from './SmallMobile'

export const Stages = () => {
    const windowSize = useWindowSize()
    return (
        <>
            {
                (windowSize.width > 1000) ? <Desktop />
                    : (windowSize.width <= 1000 && windowSize.width >= 768) ? <Tablet />
                        : (windowSize.width < 768 && windowSize.width >= 480) ? <Mobile />
                            : (windowSize.width < 480) ? <SmallMobile />
                                : ''
            }
        </>
    )
}