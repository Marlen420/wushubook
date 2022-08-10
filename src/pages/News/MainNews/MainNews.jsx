import React, { useState } from "react";
import styles from './index.module.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../../../components/Footer/index.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNew, getNewsId } from "../../../api/news.js";
import { plusIcon, quetionsIcon, editIconNew, crossIconForNew } from '../../../images/inedex.js'
import AddNews from "../../../components/Modals/AddNews/AddNews";
//Новости 

function MainNews() {
    const [isOpenModal, setIsOpenModal] = useState({ isOpen: false, dataNew: null })
    const { news } = useSelector(state => state.news)
    console.log("MainNews: ", news)
    const { user } = useSelector(state => state.profile)
    const dispatch = useDispatch()


    const navigations = useNavigate()

    const toggleModal = () => {
        setIsOpenModal({ isOpen: true, dataNew: null })
    }

    const readMore = (item) => {
        dispatch(getNewsId({ id: item.id, navigations }))
    }

    const handleDelete = (id) => {
        console.log("itemDelete: ", id)
        dispatch(deleteNew(id))
    }
    const handleOpenModalEdit = (item) => {

        setIsOpenModal({ isOpen: true, dataNew: item })
    }


    return (

        <div className={styles.conteiners} >


            <div className={styles.conteiner__addNew}>
                {
                    user.role !== 'admin' &&
                    <div className={styles.conteiner__addNew_btn} onClick={toggleModal} >
                        <img src={plusIcon} alt='' className={styles.conteiner__addNew_icon} />
                        <p className={styles.conteiner__addNew_text}>Добавить новости</p>
                    </div>
                }
            </div>


            <div className={styles.news}>
                <h1 className={styles.news__title}>Последние новости</h1>

                <div className={styles.content}>
                    {
                        news?.map(item =>
                            <div className={styles.conteiner} key={item.id}>


                                <div className={styles.conteiner__imgCon} >
                                    <img src={item.image ? item.image : quetionsIcon}
                                        alt='' className={styles.conteiner__img} />

                                </div>

                                <div className={styles.conteiner__texst}>
                                    <time className={styles.conteiner__texst_date}>{item.date}</time>
                                    <h1 className={styles.conteiner__texst_title} >{item.title}</h1>
                                    <p className={styles.conteiner__texst_text} >{item.text}</p>
                                </div>

                                <div className={styles.conteiner__options} >
                                    <img src={editIconNew} alt='' onClick={() => handleOpenModalEdit(item)} className={styles.conteiner__options_edit} />
                                    <img src={crossIconForNew} alt='' onClick={() => handleDelete(item.id)} />

                                </div>

                                <button className={styles.conteiner__about}
                                    onClick={() => readMore(item)} > Читать далее </button>


                            </div>
                        )
                    }
                </div>

            </div>

            {
                isOpenModal.isOpen && <AddNews active={isOpenModal.isOpen}
                    dataNew={isOpenModal.dataNew} setActive={setIsOpenModal} />
            }
            <Footer />

        </div >
    )
}

export default MainNews;