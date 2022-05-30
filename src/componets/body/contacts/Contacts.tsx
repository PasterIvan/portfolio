import React from "react";
import style from './Contacts.module.css'
import containerStyle from './../../../common/styles/Container.module.css'

export const Contacts = () => {


    return (
        <div className={style.contactsBlock}>
            <div className= {`${containerStyle.container} ${style.contactsContainer}`} >
                <h2 className={style.title}>CONTACTS</h2>

                    <form className={style.form}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea></textarea>
                    </form>

                <button>send</button>
            </div>
        </div>
    )
}