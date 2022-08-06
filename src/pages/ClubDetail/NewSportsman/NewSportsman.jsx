import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { Button, Input } from '../../../components';
import { CloseIcon } from '../../../images/inedex';
import styles from './style.module.css';

const NewSportsman = ({closeModal, addSportsman, status}) => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [stateRef, setStateRef] = useState('');
    const [rank, setRank] = useState('')
    const [dzi, setDzi] = useState('');
    const [duan, setDuan] = useState('');

    const handleSubmitForm = (e) => {
        e.preventDefault();
        addSportsman({name: name+'/'+lastname});
    }

    useEffect(()=>{
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = 'auto';
    }, [])

    return (
        <div 
            onClick={closeModal}
            className={styles.modal_holder}>
                <form  
                    onSubmit={handleSubmitForm}
                    className={styles.modal_window}>
                        <div 
                            className={styles.event_catcher}
                            onClick={(e)=>e.stopPropagation()}>
                            <div className={styles.header}>
                                <h2 className={styles.header_title}>Добавление спортсмена</h2>
                                <button 
                                    type="button"
                                    onClick={closeModal}
                                    className={styles.close_icon}>
                                        <img src={CloseIcon} alt="close" />
                                </button>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.input_holder}>
                                        <label htmlFor="Имя">Имя</label>
                                        <Input type="text" name="Имя" value={name} onChange={(e)=>setName(e.target.value)}/>
                                </div>
                                <div className={styles.input_holder}>
                                        <label htmlFor="Фамилия">Фамилия</label>
                                        <Input type="text" name="Фамилия" value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
                                </div>
                                <div className={styles.input_holder}>
                                        <label htmlFor="Справка">Справка о физическом состоянии</label>
                                        <Input type="text" name="Справка" value={stateRef} onChange={(e)=>setStateRef(e.target.value)}/>
                                </div>
                                <div className={styles.input_holder}>
                                        <label htmlFor="Дзи">Дзи</label>
                                        <Input type="text" name="Дзи" value={dzi} onChange={(e)=>setDzi(e.target.value)}/>
                                </div>
                                <div className={styles.input_holder}>
                                        <label htmlFor="Дуань">Дуань</label>
                                        <Input type="text" name="Дуань" value={duan} onChange={(e)=>setDuan(e.target.value)}/>
                                </div>
                            </div>
                            <div className={styles.footer}>
                                <Button
                                    type="button"
                                    projectType='confirm_secondary'
                                    onClick={closeModal}>Назад</Button>
                                <Button
                                    projectType='confirm_primary'
                                    type="submit">
                                        {
                                            status === 'Adding sportsman to the club'
                                            ?
                                            <TailSpin height={24} color="#fff"/>
                                            :
                                            "Добавить"
                                        }
                                </Button>
                            </div>
                        </div>
                </form>
        </div>
    )
}

export default NewSportsman