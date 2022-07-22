import React, { useState } from 'react'
import styles from './index.module.css'
import { UserPhoto, Check } from '../../images/inedex.js'
import Message from '../../components/Message/index.jsx'
import Dialogs from '../../conteiner/Dialogs.js'
import song from './anna_asti_-_po_baram_muzati.net.mp3'
import { Search, EditIconSideChatHeaders, people } from '../../images/inedex.js'
import Status from '../../components/Status/index.jsx'
import ChatInput from '../../components/ChatInput/index'
import { useDispatch, useSelector } from 'react-redux'
import { tr } from 'date-fns/locale'



function Chat() {
    const [isOpen, setIsOpen] = useState(false)



    const openChat = () => {
        setIsOpen(true)

    }
    const closeChat = () => {
        setIsOpen(false)
    }

    return (

        <div className={styles.chat}>

            <div className={styles.chat__sidebar}>

                <div className={styles.chat__sidebar_headers}>

                    <input type='text' placeholder='Поиск...'
                        className={styles.chat__sidebar_headers_search} />
                    <img src={Search} alt='Search Person'
                        className={styles.chat__sidebar_headers_searchIcon} />

                    <div className={styles.chat__sidebar_headers_form}>
                        <img src={EditIconSideChatHeaders} alt=''
                            className={styles.chat__sidebar_headers_formIcon} />
                    </div>

                </div>


                <div className={styles.chat__sidebar_dialogs} onClick={openChat} >

                    <Dialogs />
                </div>




            </div>


            {
                isOpen ?


                    <div className={styles.chat__dialog}>

                        <div className={styles.chat__dialog_header}>

                            <div className={styles.chat__dialog_header_conteiner} >
                                <img src={UserPhoto} alt='' />
                            </div>
                            <div className={styles.chat__dialog_header_Online}>
                                <b className={styles.chat__dialog_header_Online_name} >Иван Петоров</b>
                                <Status online={true} />
                            </div>
                            {
                                isOpen ? <p className={styles.chat__dialog_LogoOut} onClick={closeChat} ></p> : ''

                            }


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

                            {/* <Message

                                // date="Sun Apr 21 2019 21:55:29"
                                audio={song}
                                user={{

                                    fullname: "Федор Достоевский",
                                    isOnline: false,
                                    avator: { UserPhoto }
                                }}
                            />
 */}





                        </div>
                        <div className={styles.chat__dialog_input}>
                            <ChatInput />
                        </div>
                    </div> :
                    <div className={styles.chat__Notdialog} >
                        <img alt='' className={styles.chat__Notdialog_img} src={'https://img.freepik.com/free-vector/flat-woman-at-home-office-with-laptop-conducting-video-meeting-team-building-with-colleagues-girl-chatting-and-talking-with-friends-online-vector-illustration-for-videoconference-or-remote-work_88138-551.jpg'} />
                        <p className={styles.chat__Notdialog_text}>Выберите диалог</p>
                    </div>

            }






            {/* <Dialogs

                items={[
                    {
                        user: {
                            fullname: 'Фёдрол Максим',
                            avator: 'https://cutt.ly/4KMAYeh'
                        },
                        lastMessage: {
                            text: "Мир мир qмир мир",
                            isReaded: false,
                            created_at: new Date()
                        }
                    },

                    {
                        user: {
                            fullname: 'Илон Маск',
                            avator: 'data:image/jpeg;base64,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'
                        },
                        lastMessage: {
                            text: "Tesla00",
                            isReaded: false,
                            created_at: new Date()
                        }
                    }
                ]}
            /> */}

            {/* <DialogItem user={{
                    fullname: "Федор Достоевский",
                    isOnline: true
                }}
                    unreaded={0}


                />

                <DialogItem user={{
                    fullname: "Федор Достоевский",
                    isOnline: true
                }}
                    unreaded={7}


                />
                <DialogItem user={{
                    fullname: "Федор Достоевский",
                    isOnline: false
                }}
                    unreaded={0}
                    online

                /> */}
            {/* </div> */}

            {/* <Message

                // date="Sun Apr 21 2019 21:55:29"
                audio={song}
                user={{

                    fullname: "Федор Достоевский",
                    isOnline: false,
                    avator: { UserPhoto }
                }}
            /> */}


            {/* <Message
                avator={UserPhoto}
                text='Hello World'
                date='02'
                isMe={true}
                isReaded={false} />

            <Message avator={UserPhoto} isTyping />

            <Message
                avator={UserPhoto}
                attachments={[
                    {
                        filename: 'image.jpg',
                        url: 'https://st.depositphotos.com/1005145/2341/i/600/depositphotos_23418410-stock-photo-pink-flowers-in-the-mountains.jpg'
                    }
                ]}
            /> */}





        </div >




    )
}


export default Chat