import { motion } from 'framer-motion';

import { WHY_US } from './constants'
import style from './style.module.scss'

export const Desktop = ({ handlerButton, handlerMenu }) => {
    const deleteArrow = () => (
        handlerButton(),
        handlerMenu()
    )
    const workPortfolio = WHY_US.column.map((list) => (
        <motion.div
            className={style.column}
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
                <h2>{list.title}</h2>
            </div>
            <div className={style.items}>
                <span>{list.description}</span>
            </div>
        </motion.div>
    ))
    return (
        <section className={style.whyUs} id="whyUs">
            <div className={style.wrapper}>
                <motion.div
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
                    <motion.div
                        className={style.column}
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
                        <img className={style.arrow} src="img/home/WhyUs/arrow.svg" alt="arrow" />
                    </motion.div>

                </div>
            </div>
        </section >
    )
}