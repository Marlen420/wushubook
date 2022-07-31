import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getClubById } from '../../api/club.api';
import { Button } from '../../components';
import usePagination from '../../hooks/usePagination/usePagination';
import Banner from './Banner/Banner';
import styles from './style.module.css';

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
    const handleAddSportsman = () => setAddSportsman(addSportsman);

    // Effects
    useEffect(()=>{
        dispatch(getClubById(id));
    }, [dispatch]);

    return (
        <div className={styles.page_holder}>
            {currentClub &&
            <>
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
