import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { checkToken } from '../../../api/login.api';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Styles from './CreatePassword.module.css';

const getInfo = (info) => {
    let i = 0;
    while(info[i] !== 'M') {
        i++;
    }
    const id = info.slice(0, i);
    console.log(id);
    const token = info.slice(i+1, info.length);
    console.log(token);
    return {userId: 1, token: 111};
}

const RecoverPassword = ({action = 'create'}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { info } = useParams();
    const [ password, setPassword ] = useState('');
    const [ conforPassword, setConfirmPassword ] = useState('');

    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
    const { userId, token } = getInfo(info);
    const handleSubmitForm = (e) => {
        e.preventDefault();
        navigate('/login');
        console.log(userId, token);
    }
    useEffect(()=>{
        dispatch(checkToken({id: userId, tmp: token}));
    }, [dispatch]);
    return (
        <div className={Styles.page}>
            <h1 className={Styles.title}>
                    Восстановление пароля
            </h1>
            <form 
            onSubmit={handleSubmitForm}
            className={Styles.form}>
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
                    Установить пароль
                </Button>
            </form>
        </div>
    )
}

export default RecoverPassword