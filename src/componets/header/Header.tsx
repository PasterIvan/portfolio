import React from "react";
import style from './Header.module.css'
import {Nav} from "./Nav";

export const Header = () => {
    return (
        <div className={style.header}>
            <Nav/>
        </div>
    )
}