import React from "react";
import style from './Work.module.css'

type PropsType =  {
    id: string
    img: string
    title: string
    description: string
}

export const Work = (props: PropsType) => {
    return (
        <div className={style.work}>
            <div className={style.item}>
                <button>view</button>
            </div>
            <div className={style.text}>
                <h3 className={style.title}>{props.title}</h3>
                <span className={style.description}>
                {props.description}
            </span>
            </div>
        </div>
    )
}