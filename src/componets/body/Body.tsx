import React from "react";
import style from './Body.module.css'
import {Greeting} from "./greeting/Greeting";
import {Skills} from "./skills/Skills";
import {Works} from "./works/Works";
import {Contacts} from "./contacts/Contacts";


export const Body = () => {
    return (
        <div className={style.body}>
            <Greeting/>
            <Skills/>
            <Works/>
            <Contacts/>
        </div>
    )
}