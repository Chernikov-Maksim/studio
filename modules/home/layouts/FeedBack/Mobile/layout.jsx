import { motion } from 'framer-motion';

import { FEED_BACK } from './constants'
import style from './style.module.scss'

export const Mobile = ({ handlerButton, handlerMenu }) => {
    const deleteArrow = () => (
        handlerButton(),
        handlerMenu()
    )
    return (
        <motion.section className={style.feedBack}
            id="feedBack"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            variants={{
                visible: { opacity: 1, translateY: '0px' },
                hidden: { opacity: 0, translateY: '50px' }
            }}>
            <div className={style.wrapper}>
                <div className={style.row}>
                    <div className={style.column}>
                        <h2>{FEED_BACK.h2}</h2>
                    </div>
                    <div className={style.column} onClick={deleteArrow}>
                        <span>{FEED_BACK.circleText}</span>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}