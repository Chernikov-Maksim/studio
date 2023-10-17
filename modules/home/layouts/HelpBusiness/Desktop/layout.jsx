import { motion } from 'framer-motion';

import { HELP_BUSINESS } from './constants'
import style from './style.module.scss'

export const Desktop = () => {
    return (
        <section id="helpBusiness" className={style.helpBusiness}>
            <div className={style.wrapper}>
                <motion.div className={style.column}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0 }}
                    variants={{
                        visible: { opacity: 1, translateY: '0px' },
                        hidden: { opacity: 0, translateY: '50px' }
                    }}>
                    <h2>
                        <span>{HELP_BUSINESS.h2[0].content}</span>
                        <span>{HELP_BUSINESS.h2[1].content}</span>
                        <span>{HELP_BUSINESS.h2[2].content}</span>
                        <span>{HELP_BUSINESS.h2[3].content}</span>
                    </h2>
                </motion.div>
                <div className={style.column}>
                    <motion.div
                        className={style.items}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        variants={{
                            visible: { opacity: 1, translateY: 0 },
                            hidden: { opacity: 0, translateY: '3.125rem' }
                        }}>
                        <span>{HELP_BUSINESS.description}</span>
                    </motion.div>
                    <motion.div
                        className={style.items}
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
            </div>
        </section>
    )
}