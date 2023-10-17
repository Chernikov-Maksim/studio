import { useWindowSize } from '/hook'

import { Desktop } from './Desktop'
import { Tablet } from './Tablet'
import { Mobile } from './Mobile'
import { SmallMobile } from './SmallMobile'

export const Footer = ({ hrefArrow }) => {
    const windowSize = useWindowSize()
    return (
        <>
            {
                (windowSize.width > 1000) ? <Desktop hrefArrow={hrefArrow} />
                    : (windowSize.width <= 1000 && windowSize.width >= 768) ? <Tablet hrefArrow={hrefArrow} />
                        : (windowSize.width < 768 && windowSize.width >= 480) ? <Mobile hrefArrow={hrefArrow} />
                            : (windowSize.width < 480) ? <SmallMobile hrefArrow={hrefArrow} />
                                : ''
            }
        </>
    )
}