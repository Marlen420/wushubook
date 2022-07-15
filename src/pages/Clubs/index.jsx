import React from "react";
import { useSelector } from "react-redux";
import ClubsList from "./ClubsList/ClubsList";
import styles from './index.module.css'

//Клубы

function Clubs() {
    const { data } = useSelector(state=>state.clubs);

    return (
        <div className={styles.content} >
            <h2 className={styles.clubs_title}>Клубы</h2>
            <ClubsList clubs={data}/>
        </div>
    )
}

export default Clubs;