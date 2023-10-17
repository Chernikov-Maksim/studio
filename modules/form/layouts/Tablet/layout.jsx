import { useState } from 'react'
import Link from 'next/link'

import { FormInProgress } from './FormInProgress'
import { FormDone } from './FormDone'
import { FormError } from './FormError'
import { FormNotInternet } from './FormNotInternet'

export const Tablet = ({ handlerButton, handlerMenu }) => {
    const [doneForm, setDoneForm] = useState(undefined)
    const isDoneForm = () => setDoneForm(doneForm = true)
    const isErrorForm = () => setDoneForm(doneForm = false)
    const isNotInternet = () => setDoneForm(doneForm = 'noInternet')
    const isErrorInProgressForm = () => setDoneForm(doneForm = undefined)
    return (
        <>
            {
                doneForm === undefined
                    ? <FormInProgress
                        handlerButton={handlerButton}
                        isDoneForm={isDoneForm}
                        isErrorForm={isErrorForm}
                        isNotInternet={isNotInternet}
                        handlerMenu={handlerMenu} />
                    : doneForm === true
                        ? <FormDone
                            handlerButton={handlerButton}
                            handlerMenu={handlerMenu} />
                        : doneForm === false
                            ? <FormError
                                handlerButton={handlerButton}
                                handlerMenu={handlerMenu}
                                isErrorInProgressForm={isErrorInProgressForm} />
                            : doneForm == 'noInternet'
                                ? <FormNotInternet
                                    handlerButton={handlerButton}
                                    handlerMenu={handlerMenu}
                                    isErrorInProgressForm={isErrorInProgressForm} />
                                : ''
            }
        </>
    )
}