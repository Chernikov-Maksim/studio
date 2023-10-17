import { motion } from 'framer-motion';

import { STAGES } from './constants'
import style from './style.module.scss'

export const Desktop = () => {
    const stagesDev = STAGES.stages.map((list) => (
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
                <span>{list.title}</span>
            </div>
            <div className={style.items}>
                <span>{list.description}</span>
            </div>
            <div className={style.items}>
                <span>{list.symbol}</span>
            </div>
        </motion.div>
    ))
    return (
        <section className={style.stages} id="stages">
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
                    <h2>{STAGES.h2}</h2>
                </motion.div>
                <div className={style.row}>
                    {stagesDev}
                </div>
                <motion.img
                    src="img/home/Stages/optional.svg"
                    alt="optional"
                    className={style.optional}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    variants={{
                        visible: { opacity: 1, translateY: '0px' },
                        hidden: { opacity: 0, translateY: '50px' }
                    }} />
            </div>
        </section>
    )
}