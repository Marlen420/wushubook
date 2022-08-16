import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getSportsmanById } from '../../api/club.api';
import styles from './style.module.css';
import { Tab } from '../Statistics/TabCss.js'
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto'
import zoom from 'chartjs-plugin-zoom';
import { getGenerateAthlete, getGenerateOfp } from '../../api/statistics';
import { Oval, Circles } from 'react-loader-spinner'


const Sportsman = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    //state
    const { currentSportsman } = useSelector(state => state.clubs);
    const { ofpById, athleteById, status } = useSelector(state => state.statistics)


    const TabName = ['Оценка показателя ОФП', 'Достижения спортсмена']

    // useState
    const [type, setType] = useState('Оценка показателя ОФП')
    const [active, setActive] = useState(TabName[0])


    //useEffect
    useEffect(() => {
        dispatch(getSportsmanById(id));
        dispatch(getGenerateOfp(id))
        dispatch(getGenerateAthlete(id))
    }, [])


    // data for diagram
    const dataOfp = {
        labels: ofpById.map(item => item.year),
        datasets: [
            {
                label: status.getOfpByIdStatus === 'Rejected get ofp' ? 'Нету ОФП' : 'ОФП',
                data: ofpById.map((item) => item.ofp),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }

        ],
    };

    // data for diagram
    const dataAthlete = {
        labels: athleteById.map(item => item.year),
        datasets: [
            {
                label: status.getAthleteByIdStatus === 'Rejected get athlete' ? "Нету достижение" : 'Достижения',
                data: athleteById.map((item) => item.points),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }

        ],
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,

        plugins: {
            zoom: {
                pan: {
                    enabled: true,
                    mode: "x",
                    speed: 100
                }
            }
        }
    };




    function onTabClick(type) {
        setActive(type)
        if (type === 'Оценка показателя ОФП') {
            setType('Оценка показателя ОФП')
        }
        else if (type === 'Достижения спортсмена') {
            setType('Достижения спортсмена')
        }
    }



    return (
        <>
            {
                currentSportsman ?
                    <div >
                        <div className={styles.page_holder}>
                            <div className={styles.personal_info}>
                                <h1 className={styles.header_title}>Личная информация</h1>
                                <div className={styles.card}>
                                    <p className={styles.card_title}>{currentSportsman.name.split('/').join(' ')}</p>
                                    <p className={styles.card_club_title}>Клуб {`<<Название клуба>>`}</p>
                                </div>
                                <div className={styles.card}></div>
                            </div>
                            <div className={styles.achievement}>
                                <h1 className={styles.header_title}>Достижения</h1>
                                <div className={styles.card}></div>
                            </div>

                        </div>




                        <div className={styles.statistist}>

                            <h1 className={styles.statistist__title}>Статистика спортсмена </h1>

                            <div className={styles.ButtonNavigations} >
                                {TabName.map((type, index) => (
                                    <Tab key={index}
                                        active={active === type}
                                        onClick={() => onTabClick(type)} >
                                        {type}
                                    </Tab>
                                ))}
                            </div>


                            <div className={styles.statistics__diagram}>

                                {
                                    type === 'Оценка показателя ОФП' ?
                                        <Bar
                                            data={dataOfp}
                                            options={options} />
                                        :
                                        <Bar
                                            data={dataAthlete}
                                            options={options} />
                                }

                            </div>

                        </div>
                    </div >




                    :
                    <div className={styles.spinner} >
                        <Oval
                            ariaLabel="loading-indicator"
                            height={100}
                            width={100}
                            strokeWidth={5}
                            strokeWidthSecondary={3}
                            color="lightblue"
                            secondaryColor="white"

                        />
                    </div>

            }

        </>
    )
}

export default Sportsman;