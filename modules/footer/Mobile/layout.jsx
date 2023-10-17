import Link from 'next/link'
import { FOOTER } from './constants'
import style from './style.module.scss'

export const Mobile = ({ hrefArrow }) => {
    return (
        <footer className={style.footer}>
            <div className={style.wrapper}>
                <div className={style.row}>
                    <div className={style.column}>
                        <div className={style.items}>
                            <Link href={FOOTER.socialNetwork[0].href}>
                                <a className={style.telegram} target="_blank">
                                    <span>{FOOTER.socialNetwork[0].content}</span>
                                </a>
                            </Link>
                            <Link href={hrefArrow}>
                                <a className={style.arrow}>
                                    <span>{FOOTER.arrow}</span>
                                </a>
                            </Link></div>
                        <div className={style.items}>
                            <Link href={FOOTER.socialNetwork[1].href}>
                                <a className={style.instagram} target="_blank">
                                    <span>{FOOTER.socialNetwork[1].content}</span>
                                </a>
                            </Link>
                            <Link href={FOOTER.socialNetwork[2].href}>
                                <a className={style.email}>
                                    <span>{FOOTER.socialNetwork[2].content}</span>
                                </a>
                            </Link></div>
                    </div>
                    <div className={style.column}>
                        <img src="img/header/logo.svg" alt="logo" />
                        <span>2022&copy;</span>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.column}>
                        <Link href="/privacy">
                            <a>{FOOTER.politics}</a>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}