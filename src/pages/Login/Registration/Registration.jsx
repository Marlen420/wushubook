import React, { useState } from 'react'
import styles from './Registration.module.css';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { useNavigate } from 'react-router-dom';

//Регистрация

function Registration() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');

    const handleChangeName = (e) => setName(e.target.value);
    const handleChangeLastname = (e) => setLastname(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);

    const handleSigninButton = () => navigate('/login/sign-in');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(name, lastname, email);
    }

    return (
        <div className={styles.holder}>
            <h1 className={styles.title}>Регистрация</h1>
            <form
            onSubmit={handleFormSubmit} 
            className={styles.form}>
                <div className={styles['name_holder', 'input_holder']}>
                    <label 
                    className={styles.input_label}
                    htmlFor="name">Имя</label>
                    <Input 
                    type="text" 
                    name='name'
                    onChange={handleChangeName} 
                    required/>
                </div>
                <div className={styles['lastname_holder', 'input_holder']}>
                    <label 
                    className={styles.input_label}
                    htmlFor="lastname">Фамилия</label>
                    <Input 
                    type="text" 
                    name='lastname'
                    onChange={handleChangeLastname} 
                    required/>
                </div>
                <div className={styles['email_holder', 'input_holder']}>
                    <label 
                    className={styles.input_label}
                    htmlFor="email">Почта</label>
                    <Input 
                    type="email" 
                    name='email' 
                    onChange={handleEmailChange}
                    required/>
                </div>
                <Button
                type='submit'>Зарегистрироваться</Button>
            </form>
            <div className={styles.bottom_side}>
                <p
                className={styles.bottom_title}>Уже есть аккаунт?</p>
                <Button 
                onClick={handleSigninButton}
                projectType='secondary'>Войти</Button>
            </div>
        </div>
    )
}

export default Registration;