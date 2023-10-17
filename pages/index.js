import Head from 'next/head'
import { useState } from 'react';

import { Header } from '/modules/header'
import { Footer } from '/modules/footer'
import {
  MainSection,
  HelpBusiness,
  Portfolio,
  WhyUs,
  Work,
  Stages,
  ResultWork,
  FeedBack
} from '/modules/home'
import { Form } from '/modules/form'
import { ToBeginArrow } from '/modules/toBeginArrow'

const Home = () => {
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
        <title>Создаем сайты, которые продают | weBa</title>
        <meta name="description" content="Разработка различных видов сайтов: landing page, сайт-визитка, многостраничный сайт, интернет-магазин, блог. Продвижение сайтов в Google Adwords и Яндекс Директ." />
      </Head>
      <Header handlerButton={handlerButton} handlerMenu={handlerMenu}/>
      <main>
        {isFormFilling === true ? <Form handlerButton={handlerButton} handlerMenu={handlerMenu} /> : ''}
        <MainSection handlerButton={handlerButton} handlerMenu={handlerMenu} />
        <HelpBusiness />
        <Portfolio />
        <WhyUs handlerButton={handlerButton} handlerMenu={handlerMenu} />
        <Work handlerButton={handlerButton} handlerMenu={handlerMenu}/>
        <Stages />
        <ResultWork />
        <FeedBack handlerButton={handlerButton} handlerMenu={handlerMenu}/>
        {!isActiveMenu ? <ToBeginArrow linkArrow="/" /> : ''}
      </main>
      <Footer hrefArrow="/" />
    </>
  )
}

export default Home