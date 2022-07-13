import React from 'react';
import { Button, Input } from '../../../../components';
import { CloseIcon } from '../../../../images/inedex';
import styles from '../newUser.module.css';

const NewUserView = ({
    name, setName,
    lastname, setLastname,
    email, setEmail,
    role, setRole,
    city, setCity,
    country, setCountry,
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
                <div className={styles.form_header}>
                    <h2 className={styles.form_title}>
                        Добавление пользователя
                    </h2>
                    <img 
                        className={styles.close_icon}
                        src={CloseIcon}
                        onClick={closeWindow} 
                        alt="close"/>
                </div>
                <div className={styles.form_content}>
                    <div className={styles.form_role}>
                        <div className={styles.form_radio_holder}>
                            <div className={styles.radio_input_holder}>
                                <Input
                                    type="radio"
                                    projectType='radio'
                                    value="trainer"
                                    name="role"
                                    onChange={setRole}
                                    id="role-trainer"/>
                                </div>
                                <label htmlFor="role-trainer">Тренер</label>
                            </div>
                            <div className={styles.form_radio_holder}>
                                <div className={styles.radio_input_holder}>
                                    <Input
                                        type="radio"
                                        projectType='radio'
                                        value="secretary"
                                        name="role"
                                        onChange={setRole}
                                        id="role-secretar"/>
                                </div>
                                <label htmlFor="role-secretar">Секретарь</label>
                            </div>
                            <div className={styles.form_radio_holder}>
                                <div className={styles.radio_input_holder}>
                                    <Input
                                        type="radio"
                                        projectType='radio'
                                        value="judge"
                                        name="role"
                                        onChange={setRole}
                                        id="role-judge"/>
                                </div>
                                <label htmlFor="role-judge">Судья</label>
                            </div>
                    </div>
                    <div className={styles.form_input_list}>
                        <div className={styles.form_input_holder}>
                            <label htmlFor="name">Имя</label>
                            <Input
                                name="name"
                                value={name}
                                onChange={setName}/>
                        </div>
                        <div className={styles.form_input_holder}>
                            <label htmlFor="lastname">Фамилия</label>
                            <Input
                                name="lastname"
                                value={lastname}
                                onChange={setLastname}/>
                        </div>
                        <div className={styles.form_input_holder}>
                            <label htmlFor="category">Спортивный разряд</label>
                            <Input
                                name="category"
                                value={category}
                                onChange={setCategory}/>
                        </div>
                        <div className={styles.form_input_holder}>
                            <label htmlFor="club">Клубы</label>
                            <Input
                                name="club"
                                value={club}
                                onChange={setClub}/>
                        </div>
                        <div className={styles.form_input_holder}>
                            <label htmlFor="country">Страна</label>
                            <Input
                                name="country"
                                value={country}
                                onChange={setCountry}/>
                        </div>
                        <div className={styles.form_input_holder}>
                            <label htmlFor="city">Город</label>
                            <Input
                                name="city"
                                value={city}
                                onChange={setCity}/>
                        </div>
                        <div className={styles.form_input_holder}>
                            <label htmlFor="email">Почта</label>
                            <Input
                                name="email"
                                value={email}
                                onChange={setEmail}/>
                        </div>
                    </div>
                </div>
                <div className={styles.form_footer}>
                    <Button
                        type="button"
                        projectType="secondary"
                        onClick={closeWindow}>
                        Назад
                    </Button>
                    <Button
                        type="submit"
                        projectType="confirm_primary">
                        Добавить
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default NewUserView

