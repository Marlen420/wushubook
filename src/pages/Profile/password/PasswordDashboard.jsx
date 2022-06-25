import React from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import styles from './password.module.css';

const PasswordDashboard = ({
    password, setPassword,
    confirmPassword, setConfirmPassword,
    newPassword, setNewPassword
}) => {
    return (
        <div className={styles.personal_dashboard}>
            <div className={styles.input_line}>
                <div className={styles.input_holder}>
                    <label htmlFor="password">Старый пароль</label>
                    <Input
                    name="password"
                    type="password"
                    placeholder="******"
                    value={password}
                    onChange={setPassword}/>
                </div>
                <div className={styles.input_holder}>
                    <label htmlFor="new password">Новый пароль</label>
                    <Input
                    name="new password"
                    type="password"
                    placeholder="******"
                    value={newPassword}
                    onChange={setNewPassword}/>
                </div>
            </div>
            <div className={styles.input_line}>
                <div className={styles.input_holder}>
                    <label htmlFor="confirm password">Повторите пароль</label>
                    <Input
                    name="confirm password"
                    type="password"
                    placeholder="******"
                    value={confirmPassword}
                    onChange={setConfirmPassword}/>
                </div>
            </div>
            <div className={styles.button_holder}>
                <div className={styles.button}>
                    <Button>
                        Сохранить
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PasswordDashboard
