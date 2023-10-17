import { motion, AnimatePresence } from "framer-motion"
import { useState } from 'react'
import Link from 'next/link'
import NumberFormat from 'react-number-format';

import { FORM } from './constants'
import style from './style.module.scss'

export const FormInProgress = ({ handlerButton, isDoneForm, handlerMenu, isErrorForm, isNotInternet }) => {
    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const [isAllowEmpty, setIsAllowEmpty] = useState(false);
    const handleSubmit = e => {
        // const symbol = /[^a-zа-яё ]/gi
        // if ()
        e.preventDefault();
        const data = {
            name,
            tel
        };
        fetch('/api/contact', {
            method: 'post',
            body: JSON.stringify(data)
        })
            .then(
                response => {
                    if (response.status == 200) {
                        isDoneForm()
                    }
                    else if (response.status == 500) {
                        isErrorForm()
                    }
                    else {
                        let error = new Error(response.statusText)
                        error.response = response
                        throw error
                    }
                }
            )
            .catch((err) => {
                if (err.message == 'Failed to fetch') {
                    isNotInternet()
                }
                else {
                    isErrorForm()
                }
            })
    }
    const exitForm = () => (
        handlerButton(),
        handlerMenu()
    )
    return (
        <>
            <AnimatePresence>
                <motion.section
                    key="modal"
                    className={style.formFilling}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0 }}>
                    <div className={style.wrapper}>
                        <div className={style.exit} onClick={exitForm}>
                            <span></span>
                            <span></span>
                        </div>
                        <h2>{FORM.h2}</h2>
                        <h3>{FORM.h3}</h3>
                        <form onSubmit={handleSubmit} className={style.form}>
                            <input
                                id="name"
                                type="text"
                                maxLength="35"
                                placeholder={FORM.form[0].name}
                                onChange={e => setName(e.target.value = e.target.value.split(' ').map(i => i ? (i[0].toUpperCase() + i.slice(1)) : i).join(' ').replace(/[^a-zа-яё ]/gi, ''))}
                            />
                            <NumberFormat
                                format="+7 (###) ###-####"
                                mask="_"
                                placeholder={FORM.form[1].tel}
                                allowEmptyFormatting
                                className={isAllowEmpty ? style.onNumberFormat : style.offNumberFormat}
                                onChange={e => setTel(e.target.value)}
                                onFocus={() => setIsAllowEmpty(isAllowEmpty = true)}
                                onBlur={() => (tel == '' || tel == '+7 (___) ___-____') ? setIsAllowEmpty(isAllowEmpty = false) : setIsAllowEmpty(isAllowEmpty = true)}
                            />

                            <input
                                type="submit"
                                value={FORM.form[2].buttonText}
                                disabled={name.length < 2 || tel.includes("_") == true || tel.length < 17 || name.split(' ').join('').length == 0}
                            />
                        </form>
                        <div className={style.socialNetwork}>
                            <div className={style.column}>
                                <span>{FORM.h4}</span>
                            </div>
                            <div className={style.column}>
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
                </motion.section>
                <div className={style.wrapperForm} onClick={exitForm}></div>
            </AnimatePresence>

        </>
    )
}