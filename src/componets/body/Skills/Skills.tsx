import React from "react";
import style from './Skills.module.css'
import containerStyle from './../../../common/styles/Container.module.css'
import {Skill} from "./Skill";

export const Skills = () => {
    return (
        <div className={style.skills}>
            <div className={containerStyle.container}>
                <Skill />
            </div>
        </div>
    )
}