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
            <div className={Styles.title}>
                {action === 'reset' 
                ? "Восстановление пароля"
                : "Создание пароля"}
            </div>
            <form>
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
                <Button 
                title={ action === "reset" ? "Установить пароль" : "Зарегистрироваться"}
                type="submit"/>
            </form>
        </div>
    )
}

export default CreatePassword