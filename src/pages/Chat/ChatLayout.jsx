import React from 'react';
import styles from './index.module.css';
import Dialogs from '../../conteiner/Dialogs.js'
import DialogsHeader from './components/DialogsHeader/DialogsHeader';
import DialogLayout from './components/DialogLayout/DialogLayout';


const ChatLayout = ({
    isOpen,
    closeChat,
    search,
    setSearch,
    dialogsList,
    me,
    currentDialog,
    handleDialogClick,
    people=null,
    loadDialog,
    sendMessage,
    setTyping
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
                        handleDialogClick={handleDialogClick}
                        dialogsList={dialogsList}/>
                </div>
            </div>


            {
                currentDialog ?
                    <DialogLayout
                        setTyping={setTyping}
                        sendMessage={sendMessage}
                        loadDialog={loadDialog}
                        id={currentDialog.id}
                        people={people}/>
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
