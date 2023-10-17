import Link from 'next/link'

import { FORM } from './constants'
import style from './style.module.scss'

export const FormDone = ({ handlerButton, handlerMenu }) => {
    const exitForm = () => (
        handlerButton(),
        handlerMenu()
    )
    return (
        <>
            <section className={style.formFilling}>
                <div className={style.wrapper}>
                    <div className={style.exit} onClick={exitForm}>
                        <span></span>
                        <span></span>
                    </div>
                    <h2>{FORM.h2}</h2>
                    <div className={style.donefullyForm}>
                        <img src="/img/formFilling/checkBox.svg" alt="checkbox" />
                        <h3>{FORM.doneText}</h3>
                    </div>
                    <div className={style.socialNetwork}>
                        <Link href={FORM.socialNetwork[0].href}>
                            <a target="_blank">{FORM.socialNetwork[0].content}</a>
                        </Link>
                        <Link href={FORM.socialNetwork[1].href}>
                            <a target="_blank">{FORM.socialNetwork[1].content}</a>
                        </Link>
                        <Link href={FORM.socialNetwork[2].href}>
                            <a>{FORM.socialNetwork[2].content}</a>
                        </Link>
                    </div>
                    <div className={style.textPersonal}>
                        <span>{FORM.personalDataText[0].content}</span>
                        <Link href="/privacy">
                            <a onClick={handlerButton}>
                                <span>{FORM.personalDataText[1].content}</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
            <div className={style.wrapperForm} onClick={exitForm}></div>
        </>

    )
}