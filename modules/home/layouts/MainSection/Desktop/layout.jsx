import { motion } from 'framer-motion';

import style from './style.module.scss'
import { MAIN_SECTION } from './constants'

export const Desktop = ({ handlerButton, handlerMenu }) => {
    const deleteArrow = () => (
        handlerButton(),
        handlerMenu()
    )
    return (
        <motion.section className={style.MainSection}
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
                    <div className={style.column}>
                        <h1>
                            <span>{MAIN_SECTION.h1[0].content}</span>
                            <span>{MAIN_SECTION.h1[1].content}</span>
                            <span>{MAIN_SECTION.h1[2].content}</span>
                        </h1>
                    </div>
                    <div className={style.column} onClick={deleteArrow}>
                        <div className={style.wrapperCircle}></div>
                        <span>{MAIN_SECTION.circleText}</span>
                    </div>
                    <motion.div className={style.arrowImg} initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 3 }}
                        variants={{
                            visible: { width: '7.125em' },
                            hidden: { width: 0 }
                        }}>
                    </motion.div>
                </div>
                <div className={style.row}>
                    <span>{MAIN_SECTION.h2[0].content}</span>
                    <span>{MAIN_SECTION.h2[1].content}</span>
                </div>
            </div>
        </motion.section >
    )
}