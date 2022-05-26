import React from "react";
import style from './Greeting.module.css'
import containerStyle from './../../../common/styles/Container.module.css'

export const Greeting = () => {
    return (
        <div className={style.greeting}>
            <div className={containerStyle.container}>
                <div className={style.text}>
                    <span>Hi there</span>
                    <h1>I am Ivan</h1>
                    <p>React Developer</p>
                </div>
                <div className={style.photo}>

                </div>
            </div>
        </div>
    )
}