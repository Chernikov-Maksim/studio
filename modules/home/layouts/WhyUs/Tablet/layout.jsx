import { motion } from 'framer-motion';

import style from './style.module.scss'
import { WHY_US } from './constants'

export const Tablet = ({ handlerButton, handlerMenu }) => {
    const deleteArrow = () => (
        handlerButton(),
        handlerMenu()
    )
    const workPortfolio = WHY_US.column.map((list) => (
        <motion.div className={style.column}
            key={list.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
                visible: { opacity: 1, translateY: '0px' },
                hidden: { opacity: 0, translateY: '50px' }
            }}>
            <div className={style.items}>
                <h3>{list.title}</h3>
            </div>
            <div className={style.items}>
                <span>{list.description}</span>
            </div>
        </motion.div>
    ))
    return (
        <section className={style.whyUs} id="whyUs">
            <div className={style.wrapper}>
                <motion.div className={style.row}
                    className={style.row}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0 }}
                    variants={{
                        visible: { opacity: 1, translateY: '0px' },
                        hidden: { opacity: 0, translateY: '50px' }
                    }}>
                    <h2>{WHY_US.h2}</h2>
                </motion.div>
                <div className={style.row}>
                    <motion.div className={style.column}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        variants={{
                            visible: { opacity: 1, translateY: '0px' },
                            hidden: { opacity: 0, translateY: '50px' }
                        }}>
                        <span>{WHY_US.columnFirst}</span>
                    </motion.div>
                    {workPortfolio}
                    <div className={style.column}>
                        <motion.div className={style.arrowImg}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            variants={{
                                visible: { width: '18.875em' },
                                hidden: { width: '0em' }
                            }}
                        >
                        </motion.div>
                    </div>
                    <motion.div
                        className={style.column}
                        onClick={deleteArrow}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        variants={{
                            visible: { opacity: 1, translateY: '0px' },
                            hidden: { opacity: 0, translateY: '50px' }
                        }}>
                        <span>{WHY_US.columnLast}</span>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}