import React, { useEffect } from "react";
import styles from '../../index.module.css';
import song from '../../anna_asti_-_po_baram_muzati.net.mp3'
import Status from '../../../../components/Status/index.jsx'
import ChatInput from '../../../../components/ChatInput/index'
import { UserPhoto, Check } from '../../../../images/inedex.js'
import Message from '../../../../components/Message/index.jsx'
import socket from "../../../../utils/socket";

const DialogLayout = ({people, id, sendMessage, setTyping}) => {
    // useEffect(()=>{
    //     loadDialog(id);
    // }, [])
    socket.on('typing', (...args)=>console.log(args));
    return (
        <div className={styles.chat__dialog}>
        <div className={styles.chat__dialog_header}>
            <div className={styles.chat__dialog_header_conteiner}>
            <img src={UserPhoto} alt="" />
            </div>
            <div className={styles.chat__dialog_header_Online}>
            <b className={styles.chat__dialog_header_Online_name}>Иван Петоров</b>
            <Status online={true} />
            </div>
            {/* {
                                    isOpen ? <p className={styles.chat__dialog_LogoOut} onClick={closeChat} ></p> : ''
                                } */}
        </div>

        <div className={styles.chat__dialog_message}>
            {/* <Message
            avator={UserPhoto}
            text="Hello World Hello  World Hello World Hello WorldHello World Hello World  World Hello World  World Hello World  "
            /> */}
        </div>
        <div className={styles.chat__dialog_input}>
            <ChatInput 
                setTyping={setTyping}
                id={id}
                sendMessage={sendMessage}/>
        </div>
        </div>
    );
    };

export default DialogLayout;
