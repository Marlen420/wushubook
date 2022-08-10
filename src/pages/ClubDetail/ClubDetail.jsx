import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { addSportsmanApi, getClubById, getClubSportsmans } from '../../api/club.api';
import { Button } from '../../components';
import usePagination from '../../hooks/usePagination/usePagination';
import Banner from './Banner/Banner';
import NewSportsman from './NewSportsman/NewSportsman';
import styles from './style.module.css';
import { toast } from 'react-toastify';

const ClubDetail = () => {
    // Constants
    const { id } = useParams();
    const { currentClub, status, error } = useSelector(state=>state.clubs);
    const dispatch = useDispatch();

    // States
    const [addSportsman, setAddSportsman] = useState(false);

    // Hooks
    const {
        currentData,
        currentPage,
        jump,
        maxPage,
        next,
        prev
    } = usePagination([]);

    // Functions
    const handleAddSportsman = () => setAddSportsman(true);
    const handleCloseAddSportsman = () => setAddSportsman(false);
    const handleSubmitAddSportsman = async (data) => {
        try {
            const res = await dispatch(addSportsmanApi({...data, club: id}));
            handleCloseAddSportsman();
            return res;
        } catch (e) {
            return e;
        }
    }

    // Effects
    useEffect(()=>{
        dispatch(getClubById(id))
        .then(()=>dispatch(getClubSportsmans(id)));
    }, [dispatch]);

    useEffect(()=>{
        if (status === '') {
            handleCloseAddSportsman();
            dispatch(getClubById(id));
            toast.success('Спортсмен добавлен успешно');
        }
        else if (status === 'Rejected add sportsman to the club') {
            toast.error('Ошибка при добавлении спортсмена');
        }
    }, [status])

    return (
        <div className={styles.page_holder}>
            {(currentClub && currentClub.id === +id) &&
            <>
                {addSportsman &&
                <NewSportsman status={status} closeModal={handleCloseAddSportsman} addSportsman={handleSubmitAddSportsman}/>}
                <Banner club={currentClub}/>
                <div className={styles.all_sportsmans_header}>
                    <h3 className={styles.header_title}>Все спортсмены</h3>
                    <div className={styles.header_button_holder}>
                        <Button
                            type="button"
                            projectType="add_user"
                            onClick={handleAddSportsman}>+ Добавить спортсмена</Button>
                    </div>
                </div>
            </>}
        </div>
    )
}

export default ClubDetail
