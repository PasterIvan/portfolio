import React from "react";
import style from './Work.module.css'

type PropsType =  {
    id: string
    img: string
    title: string
    description: string
    location: boolean
}

export const Work = (props: PropsType) => {

let styleWork = props.location ? style.workLeft : style.work
    return (
        <div className={styleWork}>
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