import React from "react";
import styles from './Avator.module.css'
import { UserNotIcon } from '../../images/inedex.js'


function Avator({ user }) {
    console.log("user: ", user)
    if (user) {
        return (


            <img src={user} alt='' className={styles.message__img} />

        )
    }
    else {
        return (


            <img src={UserNotIcon} alt={`Avator not find`} className={styles.message__img} />


        )

    }


}


export default Avator