import { motion } from 'framer-motion';

import { RESULT_WORK } from './constants'
import style from './style.module.scss'

export const SmallMobile = () => {
    const result = RESULT_WORK.column.map((list) => (
        <motion.div className={style.column} key={list.id}
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
        <section className={style.resultWork} id="resultWork">
            <div className={style.wrapper}>
                <motion.div className={style.row}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0 }}
                    variants={{
                        visible: { opacity: 1, translateY: '0px' },
                        hidden: { opacity: 0, translateY: '50px' }
                    }}>
                    <h2>{RESULT_WORK.h2}</h2>
                </motion.div>
                <div className={style.row}>
                    <div className={style.wrapperResult}>
                        <motion.div className={style.column}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            variants={{
                                visible: { opacity: 1, translateY: '0px' },
                                hidden: { opacity: 0, translateY: '50px' }
                            }}>
                            <span>{RESULT_WORK.columnFirst}</span>
                        </motion.div>
                        {result}
                    </div>
                </div>
            </div>
        </section>
    )
}