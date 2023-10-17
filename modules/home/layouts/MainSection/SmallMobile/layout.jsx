import { motion } from 'framer-motion';

import { MAIN_SECTION } from './constants'
import style from './style.module.scss'

export const SmallMobile = ({ handlerButton, handlerMenu }) => {
    const deleteArrow = () => (
        handlerButton(),
        handlerMenu()
    )
    return (
        <motion.section className={style.mainSection}
            id="mainSection"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
            }}>
            <div className={style.wrapper}>
                <div className={style.row}>
                    <h1>
                        <span>{MAIN_SECTION.h1[0].content}</span>
                        <span>{MAIN_SECTION.h1[1].content}</span>
                        <span>{MAIN_SECTION.h1[2].content}</span>
                        <span>{MAIN_SECTION.h1[3].content}</span>
                    </h1>
                </div>
                <div className={style.row} onClick={deleteArrow}>
                    <div className={style.items}>
                        <span>{MAIN_SECTION.circleText}</span>
                    </div>
                    <img src="img/home/MainSection/arrowSmallMobile.svg" alt="arrow" />
                </div>
                <div className={style.row}>
                    <span>{MAIN_SECTION.content}</span>
                </div>
            </div>
        </motion.section>
    )
}