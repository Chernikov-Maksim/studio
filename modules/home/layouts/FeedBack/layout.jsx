import { useWindowSize } from '/hook'

import { Desktop } from './Desktop'
import { Tablet } from './Tablet'
import { Mobile } from './Mobile'
import { SmallMobile } from './SmallMobile'

export const FeedBack = ({ handlerButton, handlerMenu }) => {
    const windowSize = useWindowSize()
    return (
        <>
            {
                (windowSize.width > 1000) ? <Desktop handlerButton={handlerButton} handlerMenu={handlerMenu} />
                    : (windowSize.width <= 1000 && windowSize.width >= 768) ? <Tablet handlerButton={handlerButton} handlerMenu={handlerMenu} />
                        : (windowSize.width < 768 && windowSize.width >= 480) ? <Mobile handlerButton={handlerButton} handlerMenu={handlerMenu} />
                            : (windowSize.width < 480) ? <SmallMobile handlerButton={handlerButton} handlerMenu={handlerMenu} />
                                : ''
            }
        </>
    )
}