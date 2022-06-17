import React, { useState } from 'react'
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Styles from './CreatePassword.module.css';

const CreatePassword = ({action}) => {
    const [ password, setPassword ] = useState('');
    const [ conforPassword, setConfirmPassword ] = useState('');

    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log({password, conforPassword});
    }

    return (
        <div className={Styles.page}>
            <h1 className={Styles.title}>
                    {action === 'reset' 
                    ? "Восстановление пароля"
                    : "Создание пароля"}
            </h1>
            <form className={Styles.form}>
                <div className={Styles.input_list}>
                    <div className={Styles.input_holder}>
                        <label htmlFor="password">Пароль</label>
                        <Input
                        name="password"
                        onChange={handlePasswordChange}
                        type="password"/>
                    </div>
                    <div className={Styles.input_holder}>
                        <label htmlFor="confirm-password">Подтвердите пароль</label>
                        <Input
                        name="confirm-password"
                        onChange={handleConfirmPasswordChange}
                        type="password"/>
                    </div>
                </div>
                <Button
                    type="submit">
                    { action === "reset" ? "Установить пароль" : "Зарегистрироваться"}
                </Button>
            </form>
        </div>
    )
}

export default CreatePassword