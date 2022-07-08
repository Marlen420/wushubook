import React from 'react';
import { Button, Input } from '../../../../components';
import { CloseIcon } from '../../../../images/inedex';
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
        <div 
            onClick={closeWindow}
            className={styles.form_holder}>
            <form
                onClick={(e)=>e.stopPropagation()}
                className={styles.form}
                onSubmit={addUser}>
                <img 
                    className={styles.close_icon}
                    src={CloseIcon} 
                    alt="close"/>
                <h2 className={styles.form_title}>Добавление пользователя</h2>
                <div className={styles.form_role}>
                    <div className={styles.form_radio_holder}>
                        <div className={styles.radio_input_holder}>
                            <Input
                                type="radio"
                                value="trainer"
                                name="role"
                                id="role-trainer"/>
                        </div>
                        <label htmlFor="role-trainer">Тренер</label>
                    </div>
                    <div className={styles.form_radio_holder}>
                        <div className={styles.radio_input_holder}>
                            <Input
                                type="radio"
                                value="secretar"
                                name="role"
                                id="role-secretar"/>
                        </div>
                        <label htmlFor="role-secretar">Секретарь</label>
                    </div>
                    <div className={styles.form_radio_holder}>
                        <div className={styles.radio_input_holder}>
                            <Input
                                type="radio"
                                value="judge"
                                name="role"
                                id="role-judge"/>
                        </div>
                        <label htmlFor="role-judge">Судья</label>
                    </div>
                </div>
                <div className={styles.buttons_holder}>
                    <Button
                        type="button"
                        projectType="confirm_secondary"
                        onClick={closeWindow}/>
                    <Button
                        type="submit"
                        projectType="confirm_primary">
                        
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default NewUserView
