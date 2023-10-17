import Link from 'next/link'

import { motion } from 'framer-motion';

import { PORTFOLIO } from './constants'
import style from './style.module.scss'

export const Desktop = () => {
    const workPortfolio = PORTFOLIO.work.map((list) => (
        <div className={style.work} key={list.id}>
            <div className={style.prevWork}>
                <img src={list.source} alt={list.alt} />
            </div>
            <Link href={list.href}>
                <a><div className={style.workName}>
                    <span className={style}>{list.content}</span>
                    <div className={style.link}>
                        <span className={style.prew}>{'посмотреть'}</span>
                        <img className={style.arrow} src="img/home/Portfolio/arrow.svg" alt="" />
                    </div>
                </div>
                </a>
            </Link>
        </div>
    ))
    return (
        <section className={style.portfolio} id="portfolio">
            <div className={style.wrapper}>
                <motion.div
                    className={style.column}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0 }}
                    variants={{
                        visible: { opacity: 1, translateY: 0 },
                        hidden: { opacity: 0, translateY: '3.125rem' }
                    }}>
                    <div className={style.items}>
                        <span>{PORTFOLIO.text}</span>
                    </div>
                    <div className={style.items}>
                        <div className={style.box}>
                            <span>{PORTFOLIO.hover[0].content}</span>
                        </div>
                        <div className={style.box}>
                            <img src="img/home/Portfolio/arrowHover.svg" alt="arrow" />
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className={style.column}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    variants={{
                        visible: { opacity: 1, marginTop: 0 },
                        hidden: { opacity: 0, marginTop: '3.125em' }
                    }}>
                    <div className={style.items}>
                        {workPortfolio}
                    </div>
                    {/* <div className={style.items}>
                        <span>{PORTFOLIO.button}</span>
                    </div> */}
                </motion.div>
            </div>
        </section>
    )
}