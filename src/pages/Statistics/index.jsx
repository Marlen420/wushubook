import 'chart.js/auto'
import React, { useState } from 'react';
import styles from './Statistics.module.css'
import { Tab } from './TabCss';
import { Bar, Line } from 'react-chartjs-2';
import { payload, payloadClose } from '../../images/inedex.js'
import { useSelector } from 'react-redux';


function Statistics() {
    const { statistics, clubs, status } = useSelector(state => state.statistics)
    console.log("clunbs: ", clubs)
    console.log("satata: ", status.getClubsStatus)

    const TabТame = ['Оценка показателя ОФП', 'Оценка показателей спортсменов', 'Достижения клубов']

    const [active, setActive] = useState(TabТame[0])
    const [type, setType] = useState('')
    const [isOpenSalary, setIsOpenSalary] = useState(false)
    const [dates, setDates] = useState([])
    const [selesctClubs, setSelesctClubs] = useState('Выберите клуб...')

    const togglingSalary = () => {
        setIsOpenSalary(!isOpenSalary)
    }


    const dataBar = {
        labels: dates.map(item => item.name),
        datasets: [
            {
                label: 'январь-май',
                data: dates.map((item) => item.first_half_year),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'июнь-декабрь',
                data: dates.map((item) => item.second_half_year),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };


    const dataLine = {
        labels: dates.map(item => item.name),
        datasets: [
            {
                label: 'январь-май',
                data: dates.map((item) => item.first_half_year),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'июнь-декабрь',
                data: dates.map((item) => item.second_half_year),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };




    function onTabClick(type) {
        setActive(type)
        if (type === 'Оценка показателя ОФП') {
            setType('Оценка показателя ОФП')
            setDates(statistics)

        }
        else if (type === 'Оценка показателей спортсменов') {
            setType("Оценка показателей спортсменов")
            setDates(statistics)


        }
        else if (type === 'Достижения клубов') {
            setType("Достижения клубов")
            setDates(statistics)

        }
    }




    const chooseClubs = (option) => {
        setSelesctClubs(option)
        setIsOpenSalary(false)
    }


    return (
        <div className={styles.content} >
            <h1 className={styles.content__title}>Статистика </h1>



            <div className={styles.f} >
                <div className={styles.content__OpenIcon}
                    onClick={togglingSalary}>
                    {isOpenSalary ? <img src={payloadClose} alt='Not find ArrowDownIcon'
                        className={styles.arrow1} />
                        :
                        <img src={payload} className={styles.arrow}
                            alt='Not find ArrowTopIcon' />}
                    {<input value={selesctClubs}
                        className={styles.input} readOnly />}

                </div>


                {
                    isOpenSalary && (
                        <div>
                            <ul className={styles.over} >
                                {

                                    clubs.map(option => (
                                        <div key={option.id} >
                                            <li className={styles.li}
                                                onClick={() => chooseClubs(option.name)}  >
                                                {option.name}
                                            </li>
                                        </div>
                                    ))
                                }
                            </ul>
                        </div>
                    )}
            </div>



            <div className={styles.ButtonNavigations} >
                {TabТame.map((type, index) => (
                    <Tab key={index}
                        active={active === type} onClick={() => onTabClick(type)}>
                        {type}</Tab>
                ))}
            </div>


            <div className={styles.chart} >
                {
                    type === 'Оценка показателя ОФП' ||
                        type === 'Достижения клубов' ||
                        type === '' ?
                        <Bar data={dataBar} width={1250} height={616}
                            className={styles.chart_diagram}
                            options={{ maintainAspectRatio: false }}

                        />
                        :
                        <Line className={styles.chart_diagram} data={dataLine}
                            width={1250} height={616}

                            options={{ maintainAspectRatio: false }}
                        />
                }

            </div>
        </div >
    )
}

export default Statistics;
