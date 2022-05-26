import React from "react";
import style from './Body.module.css'
import {Greeting} from "./Greeting/Greeting";
import {Skills} from "./Skills/Skills";


export const Body = () => {
    return (
        <div className={style.body}>
            <Greeting/>
            <Skills/>
        </div>
    )
}