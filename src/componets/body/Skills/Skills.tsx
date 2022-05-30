import React, {useState} from "react";
import style from './Skills.module.css'
import containerStyle from './../../../common/styles/Container.module.css'
import {Skill} from "./Skill";
import {v1} from "uuid";

export type SkillType = {
    id: string
    img: string
    title: string
    description: string
}

export const Skills = () => {

    let [skills, setSkills] = useState<Array<SkillType>>([
            {
                id: v1(), img: "", title: "JS",
                description: 'sdbfdasdaffdb kjnsdv n wne wen wenf wefn wef ' +
                    'weofnoweinf iweonf;o efn ' +
                    ' wneo oweifnoinbfngmhnbvcsdvw' +
                    'wefw'
            },
            {
                id: v1(), img: "", title: "React",
                description: 'sdbfdasdaffdb kjnsdv n wne wen wenf wefn wef ' +
                    'weofnoweinf iweqwdqwdqwdqwdqwdonf;o efn ' +
                    ' wneo oweifnoin  sdv' +
                    'vsdvs dvsdvsdv' +
                    'sdvsdv' +
                    'sdv sdvsdv' +
                    'vdfdbvcs'
            },
            {
                id: v1(), img: "", title: "Redux",
                description: 'sdbfdasdaffdb kjnsdv n wne wen wenf wefn wef ' +
                    'weofnoweinf iweonf;o efn ' +
                    ' wneo oweifqwdqwdq wdqwdqwdqwdnoin'
            },
        {
                id: v1(), img: "", title: "TS",
                description: 'sdbfdasdaffdb kjnsdv n wne wen wenf wefn wef ' +
                    'weofnoweinf iweonf;o efn ' +
                    ' wneo oweifqwdqwdq wdqwdqwdqwdnoin'
            }
        ]
    );

    return (
        <div className={style.skillsBlock}>
            <div className={`${containerStyle.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>SKILLS</h2>
                <div className={style.skills}>
                    {skills.map(s => {
                        return <Skill
                            id={s.id}
                            img={s.img}
                            title={s.title}
                            description={s.description}/>
                    })}
                </div>
            </div>
        </div>
    )
}