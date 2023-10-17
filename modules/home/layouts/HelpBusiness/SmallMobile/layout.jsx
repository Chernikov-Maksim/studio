import { motion } from 'framer-motion';

import { HELP_BUSINESS } from './constants'
import style from './style.module.scss'

export const SmallMobile = () => {
    return (
        <section className={style.helpBusiness} id="helpBusiness">
            <div className={style.wrapper}>
                <motion.div className={style.row}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0 }}
                    variants={{
                        visible: { opacity: 1, translateY: 0 },
                        hidden: { opacity: 0, translateY: '3.125rem' }
                    }}>
                    <h2>
                        <span>{HELP_BUSINESS.h2[0].content}</span>
                        <span>{HELP_BUSINESS.h2[1].content}</span>
                        <span>{HELP_BUSINESS.h2[2].content}</span>
                    </h2>
                </motion.div>
                <motion.div className={style.row}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    variants={{
                        visible: { opacity: 1, translateY: '0px' },
                        hidden: { opacity: 0, translateY: '50px' }
                    }}>
                    <span>{HELP_BUSINESS.description}</span>
                </motion.div>
                <motion.div className={style.row}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    variants={{
                        visible: { opacity: 1, translateY: '0px' },
                        hidden: { opacity: 0, translateY: '50px' }
                    }}>
                    <span></span>
                    <span>{HELP_BUSINESS.workText}</span>
                </motion.div>
            </div>
        </section>
    )
}