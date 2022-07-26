import React from 'react';
import styles from './index.module.css';
import { UserPhoto, Check } from '../../images/inedex.js'
import Message from '../../components/Message/index.jsx'
import Dialogs from '../../conteiner/Dialogs.js'
import song from './anna_asti_-_po_baram_muzati.net.mp3'
import Status from '../../components/Status/index.jsx'
import ChatInput from '../../components/ChatInput/index'
import DialogsHeader from './components/DialogsHeader/DialogsHeader';


const ChatLayout = ({
    isOpen,
    closeChat,
    search,
    setSearch,
    dialogsList,
    me,
    currentDialog,
    people=null
}) => {

    return (
        <div className={styles.chat}>

            <div className={styles.chat__sidebar}>
                <DialogsHeader 
                    search={search} 
                    setSearch={setSearch}/>

                <div className={styles.chat__sidebar_dialogs} >
                    <Dialogs
                        me={me}
                        dialogsList={dialogsList}/>
                </div>
            </div>


            {
                currentDialog ?
                    <div className={styles.chat__dialog}>

                        <div className={styles.chat__dialog_header}>

                            <div className={styles.chat__dialog_header_conteiner} >
                                <img src={UserPhoto} alt='' />
                            </div>
                            <div className={styles.chat__dialog_header_Online}>
                                <b className={styles.chat__dialog_header_Online_name} >Иван Петоров</b>
                                <Status online={true} />
                            </div>
                            {/* {
                                isOpen ? <p className={styles.chat__dialog_LogoOut} onClick={closeChat} ></p> : ''
                            } */}
                        </div>

                        <div className={styles.chat__dialog_message}>
                            <Message
                                avator={UserPhoto}
                                text='Hello World' />
                            <Message
                                avator={people}
                                text='Hello World'
                                // date = new Date()
                                isMe={true}
                                isReaded={false} />
                            <Message
                                avator={UserPhoto}
                                text='Hello World'
                            />
                            <Message
                                avator={people}
                                text='Hello World'
                                isMe={true}
                                isReaded={false} />

                            <Message
                                avator={UserPhoto}
                                text='Hello World' />

                            <Message
                                avator={people}
                                text='Hello World'
                                isMe={true}
                                isReaded={false} />

                            <Message
                                avator={UserPhoto}
                                text='Hello World' />

                            <Message
                                avator={people}
                                text='Hello World'
                                isMe={true}
                                isReaded={false} />

                            <Message
                                avator={UserPhoto}
                                text='Hello World' />

                            <Message
                                avator={UserPhoto}
                                text='Hello World' />

                            <Message
                                avator={UserPhoto}
                                text='Hello World Hello  World Hello World Hello WorldHello World Hello World  World Hello World  World Hello World  ' />
                        </div>
                        <div className={styles.chat__dialog_input}>
                            <ChatInput />
                        </div>
                    </div> 
                    :
                    <div className={styles.chat__Notdialog} >
                        <img alt='' className={styles.chat__Notdialog_img} src={'https://img.freepik.com/free-vector/flat-woman-at-home-office-with-laptop-conducting-video-meeting-team-building-with-colleagues-girl-chatting-and-talking-with-friends-online-vector-illustration-for-videoconference-or-remote-work_88138-551.jpg'} />
                        <p className={styles.chat__Notdialog_text}>Выберите диалог</p>
                    </div> 
            } 





        </div >
    )
}

export default ChatLayout
