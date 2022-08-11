import React, { useEffect, useRef } from 'react'
import { TailSpin } from 'react-loader-spinner';
import Button from '../../Button';
import styles from './index.module.css'
import { crossIcon } from '../../../images/inedex.js'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { createNewEventCalendar, deleteEventCalendar, editEventCalendar } from '../../../api/calendar';
import 'moment/locale/ru'
import { setNullStatus } from '../../../redux/reducers/calendarSlice';

function CalendarModal({ active, setActive, date, idEventItem }) {

    const dispatch = useDispatch()
    const { status, error, dataOneEvent } = useSelector(state => state.calendar)


    const [start, setStart] = useState()
    const [end, setEnd] = useState()

    const initialValues = {
        id: Number(Math.floor(Math.random() * 20000)),
        title: '',
        start: '',
        end: '',
        time: '',
        display: '',
        color: '',
        allDay: false,
        textColor: '',

    }

    const initialValuesEdit = {
        id: Number(idEventItem?.id),
        title: idEventItem?.title,
        start: idEventItem?.start,
        end: idEventItem?.end,
        display: idEventItem?.display,
        color: idEventItem?.color,
        time: '',
        textColor: ''
    }



    useEffect(() => {
        if (idEventItem) {
            setStart(idEventItem.start)

            !idEventItem.end ? setEnd(idEventItem.start)
                : setEnd(idEventItem.end)

        }
        else {
            setStart(date)
            setEnd(date)
        }

        if (
            status.createEventStatus === 'Creted event' ||
            status.deleteEventStatus === 'Delted event' ||
            status.editEventStatus === 'Edited event') {
            setActive(false)
            dispatch(setNullStatus())

        }


    }, [date, idEventItem, status])



    useEffect(() => {

        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = 'auto';
    }, [])






    const handleCloseModal = () => {
        setActive(false)
    }


    const colorBackground = ['rgb(238, 234, 255)', 'rgb(255,226,249)', 'rgb(215, 249, 245)'];
    const colorText = {
        'rgb(238, 234, 255)': 'rgb(111, 93,195)',
        'rgb(255,226,249)': 'rgb(167, 24, 112)',
        'rgb(215, 249, 245)': 'rgb(86, 141, 143)'
    }


    const AddValidation = Yup.object().shape({
        title: Yup.string()
            .required('Поле не может быть пустым.'),
    })

    const handleDeleteEvent = (id) => {
        dispatch(deleteEventCalendar(id))
    }


    return (
        <div className={active ? styles.active : styles.modal}>
            <div className={styles.modal__content}>
                <Formik
                    initialValues={idEventItem ? initialValuesEdit : initialValues}
                    validationSchema={AddValidation}
                    onSubmit={(values) => {

                        const randomIndex = Math.floor(Math.random() * (colorBackground.length - 1));
                        const result = colorBackground[randomIndex];


                        values.start = start
                        values.end = end

                        values.display = 'Background'
                        values.color = result
                        values.textColor = colorText[result]


                        console.log("values: ", values)
                        idEventItem == null ? dispatch(createNewEventCalendar(values))
                            : dispatch(editEventCalendar(values))


                    }}>
                    {({ errors, touched, values }) => (
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
                                        dateFormat={moment(start).format('MM-DD-YYYY')}
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

                            <div className={styles.modal__content_allBtn}>
                                {

                                    idEventItem !== null ?

                                        <div className={styles.modal__content_btnDelete}
                                        >
                                            <Button
                                                onClick={() => handleDeleteEvent(values.id)}
                                                style={{ background: 'red' }}
                                                projectType='add_user'
                                                type='button'

                                            >

                                                {
                                                    status.deleteEventStatus === 'Deleting event' ?
                                                        <TailSpin
                                                            height={24}
                                                            color='white' />
                                                        : 'Удалить'}
                                            </Button>
                                        </div> : ''


                                }
                                <div className={styles.modal__content_btn} >
                                    <Button
                                        style={{ float: 'left' }}
                                        projectType='add_user'
                                        type='sumbit'>
                                        {
                                            status.createEventStatus === 'Creating event' ||
                                                status.editEventStatus === 'Editing event' ?
                                                <TailSpin
                                                    height={24}
                                                    color='white' />
                                                : 'Сохранить'}
                                    </Button>

                                </div>
                            </div>
                        </Form>
                    )}
                </Formik >

            </div>
        </div >
    )
}


export default CalendarModal