import { motion } from 'framer-motion';

import Link from 'next/link'
import { PORTFOLIO } from './constants'
import style from './style.module.scss'

export const Mobile = () => {
    const workPortfolio = PORTFOLIO.work.map((list) => (
        <div className={style.work} key={list.id}>
            <div className={style.items}>
                <span>{list.content}</span>
                <Link href={list.href}>
                    <a>
                        <img src={list.source} alt={list.alt} />
                    </a>
                </Link>
            </div>
        </div>
    ))
    return (
        <section className={style.portfolio} id="portfolio">
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
                    <h3>{PORTFOLIO.text}</h3>
                </motion.div>
                <motion.div className={style.row}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    variants={{
                        visible: { opacity: 1, translateY: 0 },
                        hidden: { opacity: 0, translateY: '3.125rem' }
                    }}>
                    {workPortfolio}
                </motion.div>
                {/* <motion.div className={style.row}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    variants={{
                        visible: { opacity: 1, translateY: '0px' },
                        hidden: { opacity: 0, translateY: '50px' }
                    }}>
                    <div className={style.column}>
                        <span>{PORTFOLIO.button}</span>
                    </div>
                </motion.div> */}
            </div>
        </section>
    )
}