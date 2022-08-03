import React, { useEffect, useRef } from 'react'
import { TailSpin } from 'react-loader-spinner';
import Button from '../../Button';
import styles from './index.module.css'
import { crossIcon } from '../../../images/inedex.js'
import DatePicker from "react-datepicker";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { createNewEventCalendar } from '../../../api/calendar';
import 'moment/locale/ru'

function CalendarModal({ active, setActive, date, calendarEvents }) {

    console.log(":", calendarEvents)

    const dispatch = useDispatch()
    const { status, error } = useSelector(state => state.calendar)

    const [start, setStart] = useState(date)
    const [end, setEnd] = useState(date)

    useEffect(() => {
        setStart(date)
        setEnd(date)
    }, [date])


    useEffect(() => {
        // dataNew ? setInitialValues(initialValuesEdit) : setInitialValues(initialValuesAdd)
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = 'auto';
    }, [])

    const refs = useRef()


    const initialValues = {
        id: Math.floor(Math.random() * 20000),
        title: '',
        start: '',
        end: '',
        time: '',
        display: '',
        color: ''
    }


    const handleCloseModal = () => {
        setActive(false)
    }


    const color = ['#FFE99C', '#F2F2F2', '#DAFBF9', '#5f9ea0'];

    const AddValidation = Yup.object().shape({
        title: Yup.string()
            .required('Поле не может быть пустым.'),

    })




    return (
        <div className={active ? styles.active : styles.modal}>
            <div className={styles.modal__content}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={AddValidation}
                    onSubmit={(values) => {

                        const randomIndex = Math.floor(Math.random() * (color.length - 1)); // генерируем случайный индекс в допустимом диапазоне
                        const result = color[randomIndex]; // извлекаем значение под случайным индексом


                        values.start = moment(start).format('MM-DD-YYYY, HH:MM')
                        values.end = moment(end).format('MM-DD-YYYY, HH:MM')
                        values.display = ""
                        values.color = result

                        console.log("Values: ", values)
                        // dispatch(setEvent(values))


                        dispatch(createNewEventCalendar(values))

                    }}>
                    {({ errors, touched }) => (
                        <Form>
                            <div className={styles.modal__content_cross} onClick={handleCloseModal} >
                                <img src={crossIcon} alt='' />
                            </div>


                            <Field name='title' type='text' placeholder='Добавить название'
                                className={styles.modal__content_input} />
                            {
                                errors.title && touched.title ?
                                    (
                                        <div className={styles.errors}>{errors.title}</div>
                                    ) : null
                            }

                            <div className={styles.modal__content_input_time}>

                                <div className={styles.modal__content_input_time1} >
                                    <label className={styles.modal__content_input_text} >Начало даты </label>

                                    <Datetime value={start}
                                        locale="ru"
                                        dateFormat={moment(start).format('MM-DD-YYYY, ')}
                                        onChange={data => setStart(data)}

                                    />
                                </div>


                                <div>
                                    <label className={styles.modal__content_input_text}>Конец даты </label>
                                    <Datetime value={end}
                                        locale="ru"
                                        dateFormat={moment(end).format('MM-DD-YYYY, ')}
                                        onChange={data => setEnd(data)} />
                                </div>

                            </div>

                            <div className={styles.modal__content_btn} >
                                <Button
                                    projectType='add_user'
                                    type='sumbit'>
                                    {status.createEventStatus === 'Creating event' ?
                                        <TailSpin
                                            height={24}
                                            color='white' />
                                        : 'Сохранить'}
                                </Button>

                            </div>
                        </Form>
                    )}
                </Formik >

            </div>
        </div >
    )
}


export default CalendarModal