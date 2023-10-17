import { motion } from 'framer-motion';

import style from './style.module.scss'
import { MAIN_SECTION } from './constants'

export const Tablet = ({ handlerButton, handlerMenu }) => {
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
                    <div className={style.column}>
                        <h1>
                            <span>{MAIN_SECTION.h1[0].content}</span>
                            <span>{MAIN_SECTION.h1[1].content}</span>
                            <span>{MAIN_SECTION.h1[2].content}</span>
                        </h1>
                    </div>
                    <div className={style.column}>
                        <span>{MAIN_SECTION.h2[0].content}</span>
                        <span>{MAIN_SECTION.h2[1].content}</span>
                    </div>
                </div>
                <div className={style.row}>
                    <motion.div className={style.arrowWrapper}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 3 }}
                        variants={{
                            visible: { width: '7.25em' },
                            hidden: { width: 0 }
                        }}>
                    </motion.div>
                    <div className={style.column} onClick={deleteArrow}>
                        <span>{MAIN_SECTION.circleText}</span>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}