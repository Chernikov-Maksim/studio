import { motion } from 'framer-motion';

import { WORK } from './constants'
import style from './style.module.scss'

export const Tablet = ({ handlerButton, handlerMenu }) => {
    const deleteArrow = () => (
        handlerButton(),
        handlerMenu()
    )
    const workPortfolio = WORK.workTest.map((list) => (
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
                <h3>{list.tiile}</h3>
            </div>
            <div className={style.items}>
                <div className={style.box}>
                    <span>{list.description}</span>
                </div>
                <div className={style.box}>
                    <span>{list.price[0].textOne}</span>
                    <span>{list.price[0].textTo}</span>
                    <span>{list.price[0].textThree}</span>
                </div>
            </div>
        </motion.div>
    ))
    return (
        <section className={style.work} id="work">
            <div className={style.wrapper}>
                <motion.div className={style.row}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    variants={{
                        visible: { opacity: 1, translateY: '0px' },
                        hidden: { opacity: 0, translateY: '50px' }
                    }}>
                    <h2>{WORK.h2}</h2>
                </motion.div>
                <div className={style.row}>
                    {workPortfolio}
                </div>
                <motion.div className={style.row}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    variants={{
                        visible: { opacity: 1, translateY: '0px' },
                        hidden: { opacity: 0, translateY: '50px' }
                    }}>
                    <div className={style.column} onClick={deleteArrow}>
                        <span>{WORK.discutions[0].cicrleText}</span>
                    </div>
                    <div className={style.column}>
                        <span>{WORK.discutions[0].descriptionOne}</span>
                        <span>{WORK.discutions[0].descriptionTo}</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}