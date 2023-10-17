import { useScroll } from '/hook'
import Link from 'next/link'
import style from './style.module.scss'

export const Desktop = ({linkArrow}) => {
    const scroll = useScroll()
    return (
        (scroll.height > 400) && (scroll.heightBody - scroll.height - scroll.heightClient > 150) ?
            <Link href={linkArrow}>
                <a className={style.linkArrow}>
                    <div className={style.toBeginArrow}>
                        <span>{'↑'}</span>
                    </div>
                </a>
            </Link>
            : ''
    )
}