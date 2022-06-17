import React, { useState } from 'react'
import styles from './Registration.module.css';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { useNavigate } from 'react-router-dom';
import Eye from '../icons/Eye.svg';
import EyeSlash from '../icons/EyeSlash.svg';

// Validation
const validationForm = (data) => {
    return true;
}

//Регистрация

function Registration() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [ isSent, setIsSent ] = useState(false);

    const handleChangeName = (e) => setName(e.target.value);
    const handleChangeLastname = (e) => setLastname(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

    const handleShowPassword = () => setShowPassword(!showPassword);
    const handleShowConfirmPassword = () => setShowPassword(!showConfirmPassword);


    const handleSigninButton = () => navigate('/login/sign-in');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(name, lastname, email);
        setIsSent(true);
    }

    return (
        <div className={styles.holder}>
            <h1 className={styles.title}>Регистрация</h1>
            {!isSent &&
            <>
                <form
                onSubmit={handleFormSubmit} 
                className={styles.form}>
                <div className={styles.input_list_holder}>
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
                    <div className={styles['password_holder', 'input_holder']}>
                        <label 
                            className={styles.input_label}
                            htmlFor="password">Пароль</label>
                        <Input 
                            type={showPassword ? 'text' : 'password'} 
                            name='password' 
                            value={password}
                            onChange={handlePasswordChange}
                            required/>
                        <img 
                            onClick={handleShowPassword}
                            src={showPassword ? Eye : EyeSlash} 
                            alt="show password image"
                            className={styles.password_show_button}/>
                    </div>
                    <div className={styles['confirm_password_holder', 'input_holder']}>
                        <label 
                            className={styles.input_label}
                            htmlFor="confirm password">Повторить пароль</label>
                        <Input 
                            type={showConfirmPassword ? 'text' : 'password'} 
                            name='confirm password' 
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            required/>
                        <img 
                        onClick={handleShowConfirmPassword}
                        src={showConfirmPassword ? Eye : EyeSlash}
                        alt="show password image"
                        className={styles.password_show_button}/>
                    </div>
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
            </>}
            {isSent &&
                <div className={styles.sent_message_holder}>
                    <p className={styles.sent_message}>Для завершения регистрации перейдите по ссылке в письме, отправленном на вашу почту <b>{email}</b></p>
                </div>}
        </div>
    )
}

export default Registration;