import React, {useState} from "react";
import style from './Works.module.css'
import containerStyle from './../../../common/styles/Container.module.css'
import {Work} from "./Work";
import {v1} from "uuid";

export type WorkType = {
    id: string
    img: string
    title: string
    description: string
    location: boolean
}

export const Works = () => {

    let [works, setWorks] = useState<Array<WorkType>>([
            {
                id: v1(), img: "", title: "Samurai",
                description: 'sdbfdasdaffdb kjnsdv n wne wen wenf wefn wef ' +
                    'weofnoweinf iweonf;o efn ' +
                    ' wneo oweifn oinbf ngmhnbv csdvw' +
                    'wefw',
                location: false
            },
            {
                id: v1(), img: "", title: "TodoList",
                description: 'sdbfdasdaffdb kjnsdv n wne wen wenf wefn wef ' +
                    'weofnoweinf iweq wdqwdq wdqw dqwdonf;o efn ' +
                    ' wneo oweifnoin',
                location: true
            },
        {
                id: v1(), img: "", title: "Portfolio",
                description: 'sdbfdasdaffdb kjnsdv n wne wen wenf wefn wef ' +
                    'weofnoweinf iweqw dqwd qwdqwdqw donf;o efn ' +
                    ' wneo oweifnoin',
            location: false
            },
        {
                id: v1(), img: "", title: "CodeWars",
                description: 'sdbfdasdaffdb kjnsdv n wne wen wenf wefn wef ' +
                    'weofnoweinf iweqwd qwdqw dqwdqwdonf;o efn ' +
                    ' wneo oweifnoin',
            location: true
            }
        ]
    );

    return (
        <div className={style.worksBlock}>
            <div className= {`${containerStyle.container} ${style.worksContainer}`} >
                <h2 className={style.title}>MY WORKS</h2>
                <div className={style.works}>
                    {works.map(w=>{
                        return <Work
                            id={w.id}
                            img={w.img}
                            title={w.title}
                            description={w.description}
                            location={w.location}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}