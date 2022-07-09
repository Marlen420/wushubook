import React, { useState } from "react";
import styles from './ChatInput.module.css'
import { Skrepka, mikrafon, flyIcon } from '../../images/inedex.js'

function ChatInput() {
    const [value, setValue] = useState('')

    const ValueMessage = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className={styles.chat__input} >

            <div className={styles.chat__input_simbvol}>
                <img className={styles.chat__input_simbvol_icon} src={Skrepka} alt='' />
                {/* <p className={styles.chat__input_simbvol_icon} style={{ visibility: 'hidden' }} >&#128521;</p> */}

            </div>

            <input className={styles.chat__input_text} onChange={e => setValue(e.target.value)}
                type='text' placeholder="Напишите сообщение..." />

            {
                value ? <img className={styles.chat__input_simbvol_icon1} src={flyIcon} alt='' />
                    :
                    <img className={styles.chat__input_simbvol_icon} src={mikrafon} alt='' />

            }

        </div>
    )
}


export default ChatInput