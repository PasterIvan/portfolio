import React from "react";
import style from './Header.module.css'
import {GreetingBlock} from "./GreetingBlock/GreetingBlock";
import {Skills} from "./Skills/Skills";


export const Body = () => {
    return (
        <div className={style.body}>
            <GreetingBlock/>
            <Skills/>
        </div>
    )
}