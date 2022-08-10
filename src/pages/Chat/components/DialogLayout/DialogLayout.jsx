import React, { useEffect, useRef, useState } from "react";
import styles from '../../index.module.css';
import song from '../../anna_asti_-_po_baram_muzati.net.mp3'
import Status from '../../../../components/Status/index.jsx'
import ChatInput from '../../../../components/ChatInput/index'
import { UserPhoto, Check } from '../../../../images/inedex.js'
import Message from '../../../../components/Message/index.jsx'
import socket from "../../../../utils/socket";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
// import { getTime } from "date-fns";


const getTime = (date) =>{
    const today = new Date(date);
    return today.getHours() + ':' + today.getMinutes();
}

const DialogLayout = ({people, sendMessage, setTyping, loadDialog, me}) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { currentDialog, status } = useSelector(state=>state.dialogs);
    const messageListRef = useRef(null);
    const [chat, setChat] = useState([]);

    useEffect(()=>{
        if (status === 'Active' && chat === undefined) navigate('/chat')
    }, [chat, status])

    useEffect(()=>{
        loadDialog(id);
    }, [id])

    useEffect(()=>{
        messageListRef.current.scrollTo(0, 99999);
    }, [currentDialog?.response])

    useEffect(()=>{
        socket.on('typing', (args)=>{console.log(args)});
        return ()=> socket.off('typing');
    }, [socket])

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

        <div className={styles.chat__dialog_message} ref={messageListRef}>
            {currentDialog?.response?.map((item)=>(
                <Message 
                    time={getTime(item.date)}
                    isMe={item.user.id === me.id ? true : (item.user === me.id ? true : false)}
                    text={item.text}/>
            ))}
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
