import React, { useEffect, useState } from 'react'
import styles from './AddNews.module.css'
import { crossIcon, photoIcon, quetionsIcon } from '../../../images/inedex.js'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { createNew, editNew } from '../../../api/news';
import { TailSpin } from 'react-loader-spinner';
import { Button } from '../../../components';

function AddNews({ active, dataNew, setActive }) {
    let data = new FormData();
    const dispatch = useDispatch()
    const [selectedImage, setSelectedImage] = useState(null);

    const { status } = useSelector(state => state.news)

    console.log("status: ", status.createNewSatatus)

    const handleCloseImage = () => {
        setSelectedImage(null)
    }
    const hanleClose = () => {
        setActive({ active: false, dataNew: null })

    }

    const initialValuesEdit = {
        id: dataNew?.id,
        image: dataNew?.image,
        title: dataNew?.title,
        text: dataNew?.text,
        date: dataNew?.date,
        imageKey: dataNew?.imageKey
    }

    const initialValuesAdd = {
        id: Math.floor(Math.random() * 20000),
        image: '',
        title: '',
        text: '',
        date: '',
        imageKey: ''
    }




    useEffect(() => {

        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = 'auto';
    }, [])


    const AddValidation = Yup.object().shape({
        title: Yup.string()
            .required('Поле не может быть пустым.'),
        text: Yup.string()
            .required('Поле не может быть пустым.')
    })




    return (
        <div className={active ? styles.active : styles.modal}>
            <div className={styles.modal__content}>
                <img src={crossIcon} onClick={hanleClose} alt='' className={styles.modal__content1_crossIcon} />

                <Formik

                    initialValues={dataNew ? initialValuesEdit : initialValuesAdd}

                    validationSchema={AddValidation}
                    onSubmit={(values) => {
                        if (!selectedImage) {
                            setSelectedImage(null)
                            data.append('image', selectedImage);
                        }
                        else {
                            data.append('image', selectedImage, selectedImage.name);
                        }


                        data.append('id', values.id)
                        data.append('title', values.title)
                        data.append('text', values.text)
                        data.append('date', new Date())
                        data.append('imageKey', null)

                        dataNew !== null ? dispatch(editNew(data)) : dispatch(createNew(data))

                        setSelectedImage(null)
                        values.title = ''
                        values.text = ''

                    }}>
                    {({ errors, touched }) => (
                        <Form>
                            <div className={styles.modal__content1}>
                                <h1 className={styles.modal__content_title}>Добавление новостей</h1>

                                <div className={styles.modal__content_files}>

                                    <div className={styles.modal__content_img}>
                                        <img src={photoIcon} className={styles.modal__content_imgIcon} alt='' /><br />
                                        <label htmlFor="files" className={styles.modal__content_photo_texst} >
                                            Добавить фото  </label>

                                        <input
                                            type="file"
                                            id="files"
                                            name="file"
                                            className={styles.uploadPhoto}

                                            onChange={(event) => {
                                                setSelectedImage(event.target.files[0]);
                                            }} />

                                    </div>


                                    {
                                        selectedImage &&
                                        <div className={styles.modal__content_cross} >
                                            <img src={crossIcon} alt='' className={styles.modal__content_closeIcon}
                                                onClick={handleCloseImage} />

                                            <img alt="not find" name='image' width={'130px'} height={'71px'}
                                                className={styles.modal__content_photo}
                                                src={URL.createObjectURL(selectedImage)} />
                                        </div>
                                    }

                                </div>

                                <div className={styles.modal__content_date}>
                                    <p className={styles.modal__content_text} >Заголовок</p>
                                    <Field name='title' type='text' className={styles.modal__content_input} />
                                    {
                                        errors.title && touched.title ?
                                            (
                                                <div className={styles.errors}>{errors.title}</div>
                                            ) : null
                                    }
                                </div>

                                <div className={styles.modal__content_date}>
                                    <p className={styles.modal__content_text} >Описание</p>
                                    <Field type="text" component={'textarea'}
                                        className={styles.modal__content_input_texaries} name='text' />

                                    {
                                        errors.text && touched.text ?
                                            (
                                                <div className={styles.errors}>
                                                    {errors.text}
                                                </div>
                                            )
                                            :
                                            null
                                    }

                                </div>

                                <div className={styles.modal__content_btn}>
                                    <Button

                                        projectType='add_user'
                                        type='sumbit'>
                                        {status.createNewSatatus === 'Creating new'
                                            ? <TailSpin
                                                height={24}
                                                color='white' />
                                            : 'Сохранить'}
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>





            </div>

        </div >
    )
}


export default AddNews