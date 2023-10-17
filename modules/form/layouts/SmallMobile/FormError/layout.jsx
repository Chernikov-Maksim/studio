import Link from 'next/link'

import { FORM } from './constants'
import style from './style.module.scss'

export const FormError = ({ handlerButton, handlerMenu, isErrorInProgressForm }) => {
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
                        <img src="/img/formFilling/checkError.svg" alt="checkbox" />
                        <h3>{FORM.doneText}</h3>
                    </div>
                    <div className={style.border}></div>
                    <div className={style.backForm}>
                        <span className={style.backButton} onClick={isErrorInProgressForm}>
                            {FORM.backButton}
                        </span>
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