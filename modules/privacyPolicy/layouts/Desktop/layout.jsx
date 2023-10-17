import style from './style.module.scss'
import { PRIVACY } from './constants' 

export const Desktop = () => {
    const point1 = PRIVACY.points1.map((list) => (
        <div className={style.column} key={list.id}>
            <p>{list.contentWrapper}</p>
            <p className={style.contentWrapper}>{list.content}</p>
        </div>
    ))
    const point2 = PRIVACY.points2.map((list) => (
        <div className={style.column} key={list.id}>
            <p className={style.contentWrapper}>{list.content}</p>
        </div>
    ))
    const point3 = PRIVACY.points3.map((list) => (
        <div className={style.column} key={list.id}>
            <p className={style.contentWrapper}>{list.content}</p>
        </div>
    ))
    const point4 = PRIVACY.points4.map((list) => (
        <div className={style.column} key={list.id}>
            <p className={style.contentWrapper}>{list.content}</p>
        </div>
    ))
    const point5 = PRIVACY.points5.map((list) => (
        <div className={style.column} key={list.id}>
            <p className={style.contentWrapper}>{list.content}</p>
        </div>
    ))
    const point6 = PRIVACY.points6.map((list) => (
        <div className={style.column} key={list.id}>
            <p className={style.contentWrapper}>{list.content}</p>
        </div>
    ))
    const point7 = PRIVACY.points7.map((list) => (
        <div className={style.column} key={list.id}>
            <p className={style.contentWrapper}>{list.content}</p>
        </div>
    ))
    const point8 = PRIVACY.points8.map((list) => (
        <div className={style.column} key={list.id}>
            <p className={style.contentWrapper}>{list.content}</p>
        </div>
    ))
    const point9 = PRIVACY.points9.map((list) => (
        <div className={style.column} key={list.id}>
            <p className={style.contentWrapper}>{list.content}</p>
        </div>
    ))
    const point10 = PRIVACY.points10.map((list) => (
        <div className={style.column} key={list.id}>
            <p>{list.contentWrapper}</p>
            <p className={style.contentWrapper}>{list.content}</p>
        </div>
    ))
    const point11 = PRIVACY.points11.map((list) => (
        <div className={style.column} key={list.id}>
            <p className={style.contentWrapper}>{list.content}</p>
        </div>
    ))
    const point12 = PRIVACY.points12.map((list) => (
        <div className={style.column} key={list.id}>
            <p className={style.contentWrapper}>{list.content}</p>
        </div>
    ))
    const point13 = PRIVACY.points13.map((list) => (
        <div className={style.column} key={list.id}>
            <p>{list.contentWrapper}</p>
            <p className={style.contentWrapper}>{list.content}</p>
        </div>
    ))
    const point14 = PRIVACY.points14.map((list) => (
        <div className={style.column} key={list.id}>
            <p className={style.contentWrapper}>{list.content}</p>
        </div>
    ))
    return (
        <section className={style.privacyPolicy}>
            <div className={style.wrapper}>
                <h1>{PRIVACY.h1}</h1>
                <div className={style.row}>
                    <h2>{PRIVACY.h2[0].content}</h2>
                    {point1}
                </div>
                <div className={style.row}>
                    <h2>{PRIVACY.h2[1].content}</h2>
                    {point2}
                </div>
                <div className={style.row}>
                    <h2>{PRIVACY.h2[2].content}</h2>
                    {point3}
                </div>
                <div className={style.row}>
                    <h2>{PRIVACY.h2[3].content}</h2>
                    {point4}
                </div>
                <div className={style.row}>
                    <h2>{PRIVACY.h2[4].content}</h2>
                    {point5}
                </div>
                <div className={style.row}>
                    <h2>{PRIVACY.h2[5].content}</h2>
                    {point6}
                </div>
                <div className={style.row}>
                    <h2>{PRIVACY.h2[6].content}</h2>
                    {point7}
                </div>
                <div className={style.row}>
                    <h2>{PRIVACY.h2[7].content}</h2>
                    {point8}
                </div>
                <div className={style.row}>
                    <h2>{PRIVACY.h2[8].content}</h2>
                    {point9}
                </div>
                <div className={style.row}>
                    <h2>{PRIVACY.h2[9].content}</h2>
                    {point10}
                </div>
                <div className={style.row}>
                    <h2>{PRIVACY.h2[10].content}</h2>
                    {point11}
                </div>
                <div className={style.row}>
                    <h2>{PRIVACY.h2[11].content}</h2>
                    {point12}
                </div>
                <div className={style.row}>
                    <h2>{PRIVACY.h2[12].content}</h2>
                    {point13}
                </div>
                <div className={style.row}>
                    <h2>{PRIVACY.h2[13].content}</h2>
                    {point14}
                </div>
            </div>
        </section>
    )
}