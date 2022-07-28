import React, { useEffect, useState } from "react";
import styles from './index.module.css'
import { Skrepka, mikrafon, flyIcon } from '../../images/inedex.js'

function ChatInput({sendMessage, id, setTyping}) {
    const [value, setValue] = useState('')

    const valueMessage = (e) => {
        setValue(e.target.value)
    }

    const handleSendMessage = (e) => {
        e.preventDefault();
        sendMessage({text: value, lobby: id});
    }

    useEffect(() => {
        value === '' ? setTyping(false) : setTyping(true);
        let timer = setTimeout(() => {
          if (value !== '') setTyping(false, id);
        }, 300);
        return () => clearTimeout(timer);
      }, [value]);

    return (
        <form 
            onSubmit={handleSendMessage}
            className={styles.chat__input} >

            <div className={styles.chat__input_simbvol}>
                <img className={styles.chat__input_simbvol_icon} src={Skrepka} alt='' />
                {/* <p className={styles.chat__input_simbvol_icon} style={{ visibility: 'hidden' }} >&#128521;</p> */}

            </div>

            <input 
                className={styles.chat__input_text} 
                onChange={e => setValue(e.target.value)}
                type='text' placeholder="Напишите сообщение..." />

            {
                value ? <img className={styles.chat__input_simbvol_icon1} src={flyIcon} alt='' />
                    :
                    <img className={styles.chat__input_simbvol_icon} src={mikrafon} alt='' />

            }

        </form>
    )
}


export default ChatInput