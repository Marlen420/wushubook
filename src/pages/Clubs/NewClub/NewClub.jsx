import React, { useEffect, useState } from 'react';
import { Button, Input } from '../../../components';
import { CloseIcon } from '../../../images/inedex';
import styles from './style.module.css';
import Select from 'react-select';
import { TailSpin } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getName = (str) => str.split('/').join(' ');
const getTrainerList = (list, selectedList) => list.filter((i)=>!selectedList.includes(i.id))
const getTrainerOptions = list => list.map((item)=>({label: getName(item.name), value: item.id, id: item.id}))

const NewClub = ({closeModal, handleSubmitClub, status, error, trainers}) => {
    // States
    const [title, setTitle] = useState('');
    const [trainerList, setTrainerList] = useState([-1]);
    const [trainersOptions, setTrainersOptions] = useState(getTrainerOptions(trainers));


    // Functions
    const handleTitleChange = (e) => setTitle(e.target.value);

    const handleAddTrainer = () => trainerList.length < trainers.length && setTrainerList(prev=>[...prev, -1])

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (trainerList.includes(-1)) return;
        toast.promise(
            handleSubmitClub({
                name: title,
                trainers: trainerList
            }),
            {
                pending: 'Создание клуба',
                success: 'Клуб создан успешно',
                error: 'Ошибка при создании клуба'
            }
        )
    }
    
    
    
    // Effects
    useEffect(()=>{
        document.body.style.overflow = 'hidden';
        // setTrainersOptions(getTrainerOptions(trainers))
        return () => document.body.style.overflow = 'auto';
    }, [])

    useEffect(()=>{
        setTrainersOptions(getTrainerList(getTrainerOptions(trainers), trainerList));
    }, [trainerList])

    return (
        <div 
            onClick={closeModal}
            className={styles.modal_holder}>
            <form onSubmit={handleSubmitForm}>
                <div
                    onClick={(e)=>e.stopPropagation()} 
                    className={styles.modal_window}>
                    <div className={styles.modal_header}>
                        <h3 className={styles.title}>Создание клуба</h3>
                        <img 
                            src={CloseIcon} 
                            alt="close" 
                            className={styles.close_icon}
                            onClick={closeModal}/>
                    </div>
                    <div className={styles.modal_content}>
                        <div className={styles.name_holder}>
                            <label htmlFor="club title">Наименование клуба</label>
                            <Input 
                                type="text"
                                value={title}
                                onChange={handleTitleChange}
                                name="club title"/>
                        </div>
                        {trainerList.map((item, i)=>(
                            <div 
                                key={i}
                                className={styles.name_holder}>
                                <label htmlFor={`club trainer ${i}`}>Тренер</label>
                                <Select 
                                    placeholder="Выберите тренера"
                                    options={trainersOptions}
                                    className={styles.select} onChange={(e)=>{
                                        setTrainerList((prev)=>{
                                            let arr = prev;
                                            arr[i] = e.id;
                                            console.log(arr);
                                            return arr;
                                        })
                                }}/>
                            </div>
                        ))}

                        <button 
                            type="button"
                            onClick={handleAddTrainer}
                            className={styles.add_trainer}>+ Добавить тренера</button>
                    </div>
                    <div className={styles.modal_footer}>
                        <Button 
                            projectType="confirm_secondary"
                            type="button"
                            onClick={closeModal}>Назад</Button>
                        <Button
                            type="submit"
                            projectType="confirm_primary">
                                {status === 'Creating new club'
                                ? <TailSpin 
                                    height={24}
                                    color="#fff"/>
                                : "Добавить"}
                            </Button>
                    </div>
                </div>
            </form>
            <ToastContainer/>
        </div>
    )
}

export default NewClub;