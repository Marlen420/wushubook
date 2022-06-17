import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
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
                <div className={styles.input_holder}>
                    <label 
                    className={styles.input_label}
                    htmlFor="email">Почта</label>
                    <Input 
                    type="email" 
                    name='email'
                    value={email}
                    onChange={handleEmailChange}
                    required/>
                </div>
                <div className={styles.input_holder}>
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
                <Link to="/" className={styles.forgot_password}>Забыли пароль?</Link>
                <div className={styles.button_holder}>
                    <Button
                        type='submit'>Войти</Button>
                </div>
            </form>
            <div className={styles.bottom_side}>
                <p
                className={styles.bottom_title}>Еще нет аккаунта?</p>
                <Link 
                to="/login/sign-up"
                className={styles.secondary}>Зарегистрироваться</Link>
            </div>
        </div>
    )
}
export default Authorization