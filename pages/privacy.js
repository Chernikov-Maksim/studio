import Head from 'next/head'
import { useState } from 'react';

import { Header } from '/modules/header'
import { Footer } from '/modules/footer'
import { Form } from '/modules/form'
import { PrivacyPolicy } from '/modules/privacyPolicy'
import { ToBeginArrow } from '/modules/toBeginArrow'

const Privacy = () => {
  const [isFormFilling, setIsFormFilling] = useState(false);
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const handlerButton = () => {
    !isFormFilling ? document.body.style.overflow = "hidden" : document.body.style = ''
    return (
      setIsFormFilling(!isFormFilling)
    )
  }
  const handlerMenu = () => setIsActiveMenu(!isActiveMenu)
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="купить сайт, заказать сайт, разработка сайтов, веб студия, заказать лендинг, заказать сайт интернет магазин, услуги по созданию сайта, дешевый сайт, сайты качественно, сайт недорого" />
        <title>Политика конфиденциальности | weBa</title>
        <meta name="description" content="Политика конфиденциальности веб-студии weBa" />
      </Head>
      <Header handlerButton={handlerButton} handlerMenu={handlerMenu}/>
      <main>
        {isFormFilling === true ? <Form handlerButton={handlerButton} handlerMenu={handlerMenu}/> : ''}
        <PrivacyPolicy />
        <ToBeginArrow linkArrow="/privacy/"/>
      </main>
      <Footer hrefArrow = "/privacy/"/>
    </>
  )
}

export default Privacy