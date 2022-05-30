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
}

export const Works = () => {

    let [works, setWorks] = useState<Array<WorkType>>([
            {
                id: v1(), img: "", title: "Samurai",
                description: 'sdbfdasdaffdb kjnsdv n wne wen wenf wefn wef ' +
                    'weofnoweinf iweonf;o efn ' +
                    ' wneo oweifnoinbfngmhnbvcsdvw' +
                    'wefw'
            },
            {
                id: v1(), img: "", title: "TodoList",
                description: 'sdbfdasdaffdb kjnsdv n wne wen wenf wefn wef ' +
                    'weofnoweinf iweqwdqwdqwdqwdqwdonf;o efn ' +
                    ' wneo oweifnoin'
            },
        {
                id: v1(), img: "", title: "Portfolio",
                description: 'sdbfdasdaffdb kjnsdv n wne wen wenf wefn wef ' +
                    'weofnoweinf iweqwdqwdqwdqwdqwdonf;o efn ' +
                    ' wneo oweifnoin'
            },
        {
                id: v1(), img: "", title: "CodeWars",
                description: 'sdbfdasdaffdb kjnsdv n wne wen wenf wefn wef ' +
                    'weofnoweinf iweqwdqwdqwdqwdqwdonf;o efn ' +
                    ' wneo oweifnoin'
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
                        />
                    })}
                </div>
            </div>
        </div>
    )
}