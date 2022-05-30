import React from "react";
import style from './Footer.module.css'
import containerStyle from "../../common/styles/Container.module.css";


export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${containerStyle.container} ${style.footerContainer}`}>
                <h2 className={style.title}>IVAN PASTERNAK</h2>
                <div className={style.icons}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h5 className={style.title}>© 2022 Portfolio.</h5>
            </div>
        </div>
    )
}