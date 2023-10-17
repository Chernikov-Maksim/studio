import { useWindowSize } from '/hook'

import { Desktop } from './Desktop'
import { Tablet } from './Tablet'
import { Mobile } from './Mobile'
import { SmallMobile } from './SmallMobile'

export const ToBeginArrow = ({ linkArrow }) => {
    const windowSize = useWindowSize()
    return (
        <>
            {
                (windowSize.width > 1000) ? <Desktop linkArrow={linkArrow} />
                    : (windowSize.width <= 1000 && windowSize.width >= 768) ? <Tablet linkArrow={linkArrow} />
                        : (windowSize.width < 768 && windowSize.width >= 480) ? <Mobile linkArrow={linkArrow} />
                            : (windowSize.width < 480) ? <SmallMobile linkArrow={linkArrow} />
                                : ''
            }
        </>
    )
}