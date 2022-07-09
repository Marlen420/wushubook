import React from "react";


import styles from './DialogItem.module.css'
import IconReaded from "../IconReaded/IconReaded";
import format from "date-fns/format";
import isToday from "date-fns/isToday";
import Avator from "../Avator/Avator";
import Time from "../Time/Time";
import { tr } from "date-fns/locale";
import { useDispatch, useSelector } from "react-redux";




const getMessageTime = created_at => {
    if (isToday(created_at)) {
        return format(created_at, "HH:mm")
    } else {
        return format(created_at, "DD.MM.YYYY")
    }
}

function DialogItem({ user, message, unreaded }) {
    // console.log("cre: ", message.lastMessage.created_at)


    return (
        <div className={styles.dialog__item}  >

            <div className={styles.dialog__item_avator}>
                {
                    <Avator user={user.avator} />
                }

                <div className={user.isOnline ? styles.dialog__item__online : ''}>
                </div>

            </div>

            <div className={styles.dialog__item_info}>

                <div className={styles.dialog__item_info_top}>
                    <b className={styles.dialog__item_info_name} >{user.fullname}</b>
                    <div>
                        {user.isMe ? '' : <IconReaded isMe={false} isReaded={true} />}
                    </div>
                    <span className={!user.isMe ? styles.dialog__item_date : styles.dialog__item_dateMe} >
                        {/* <Time date={message.lastMessage.created_at} /> */}
                        {
                            getMessageTime(message.lastMessage.created_at)
                        }
                    </span>
                </div>


                <div className={styles.dialog__item_info_bottom}>
                    <p className={styles.dialog__item__text}>{message.lastMessage.text} </p>

                    {user.unreaded > 0 && <div className={styles.dialog__item_info_cout}>{user.unreaded > 9 ? '99+' : user.unreaded}  </div>}
                </div>

            </div>


        </div >

    )
}

export default DialogItem