import { useWindowSize } from '/hook'

import {
    Desktop,
    Tablet,
    Mobile,
    SmallMobile
} from './layouts'

export const PrivacyPolicy = ({ handlerButton }) => {
    const windowSize = useWindowSize()
    return (
        <>
            {
                (windowSize.width > 1000) ? <Desktop handlerButton={handlerButton} />
                    : (windowSize.width <= 1000 && windowSize.width >= 768) ? <Tablet handlerButton={handlerButton} />
                        : (windowSize.width < 768 && windowSize.width >= 480) ? <Mobile handlerButton={handlerButton} />
                            : (windowSize.width < 480) ? <SmallMobile handlerButton={handlerButton} />
                                : ''
            }
        </>
    )
}