import React from 'react';
import { Button } from '../../../../components';
import styles from '../newUser.module.css';

const NewUserView = ({
    name, setName,
    lastname, setLastname,
    email, setEmail,
    role, setRole,
    patronymic, setPatronymic,
    club, setClub,
    category, setCategory,
    judgeCategory, setJudgeCategory,
    closeWindow, addUser
}) => {
    return (
        <div className={styles.form_holder}>
            <form onSubmit={addUser}>
                <div className={styles.buttons_holder}>
                    <Button
                        type="button"
                        projectType="confirm_secondary"
                        onClick={closeWindow}/>
                    <Button
                        type="submit"
                        projectType="confirm_primary"/>
                </div>
            </form>
        </div>
    )
}

export default NewUserView
