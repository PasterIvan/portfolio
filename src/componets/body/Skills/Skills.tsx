import React from "react";
import style from './Skills.module.css'
import containerStyle from './../../../common/styles/Container.module.css'
import {Skill} from "./Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className= {`${containerStyle.container} ${style.skillsContainer}`} >
                <h2 className={style.title}>SKILLS</h2>
                <div className={style.skills}>
                    <Skill />
                    <Skill />
                    <Skill />
                </div>
            </div>
        </div>
    )
}