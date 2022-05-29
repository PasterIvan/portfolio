import React from "react";
import style from './Works.module.css'
import containerStyle from './../../../common/styles/Container.module.css'

export const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div className= {`${containerStyle.container} ${style.worksContainer}`} >
                <h2 className={style.title}>SKILLS</h2>
                <div className={style.works}>

                </div>
            </div>
        </div>
    )
}