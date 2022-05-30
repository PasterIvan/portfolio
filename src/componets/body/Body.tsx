import React from "react";
import style from './Body.module.css'
import {Greeting} from "./Greeting/Greeting";
import {Skills} from "./Skills/Skills";
import {Works} from "./works/Works";


export const Body = () => {
    return (
        <div className={style.body}>
            <Greeting/>
            <Skills/>
            <Works/>
        </div>
    )
}