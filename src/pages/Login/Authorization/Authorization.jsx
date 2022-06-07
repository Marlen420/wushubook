import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Authorization.module.css';
import Eye from '../icons/Eye.svg';
import EyeSlash from '../icons/EyeSlash.svg';
import Button from '../../../components/Button';
import Input from '../../../components/Input';


const Authorization = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [isDisabledButton, setIsDisabledButton] = useState(false);
    // const isLogged = useSelector((state) => state.counter.login.isLogged);
    // useEffect(() => {
    //     if (isLogged) navigate('/');
    // }, [navigate])

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleShowPassword = () => setShowPassword(!showPassword);

    const handleSignupButton = () => {
        navigate('/login/sign-up');
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log({email, password});
    }

    return (
        <div className={styles.holder}>
            <h1 className={styles.title}>Добро пожаловать!</h1>
            <form
            onSubmit={handleFormSubmit} 
            className={styles.form}>
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
                    onChange={handlePasswordChange}
                    required/>
                    <img 
                    onClick={handleShowPassword}
                    src={showPassword ? Eye : EyeSlash} 
                    alt="show password image"
                    className={styles.password_show_button}/>
                </div>
                <p className={styles.forgot_password}>Забыли пароль?</p>
                <Button
                type='submit'>Войти</Button>
            </form>
            <div className={styles.bottom_side}>
                <p
                className={styles.bottom_title}>Еще нет аккаунта?</p>
                <Button 
                onClick={handleSignupButton}
                projectType='secondary'>Зарегистрироваться</Button>
            </div>
        </div>
    )
}
export default Authorization