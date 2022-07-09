
import 'chart.js/auto'
import React, { useState } from 'react';
import styles from './Statistics.module.css'
import Select from "react-select";
import { Tab } from './TabCss';
import { Bar, Line } from 'react-chartjs-2';

// to 
import { faker } from '@faker-js/faker';


function Statistics() {

    const nameClubs = ['Все клубы', 'Черный драконf ', 'Черный драконf ', 'Оранжевая кошка', 'Скорпион', 'Печать спящего дракона', 'Шаолинь']


    const TabТame = ['Оценка показателя ОФП', 'Оценка показателей спортсменов', 'Достижения клубов']
    const [active, setActive] = useState(TabТame[0])

    const [type, setType] = useState('')

    let labels1 = ['7июля.', '8июля.', '9июля.', '10июля.', '11июля.', '12июля.']
    let labelsMoth = ['Январь', 'Фебраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль']
    // let labelsMonth =

    const [labels, setIsName] = useState(labels1)
    // console.log("d: ", isName)



    const dataMath = {
        labels,
        datasets: [
            {
                label: '',
                data: labelsMoth.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: '',
                data: labelsMoth.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    console.log("type: ", type)
    function onTabClick(type) {
        console.log("type: ", type)
        setActive(type)
        if (type === 'Оценка показателя ОФП') {
            setType('Оценка показателя ОФП')
            setIsName(labels1)

            //         dispatch({ type: AllEmloyess })
            //         setTitlePosition("сотрудников")
        }
        else if (type === 'Оценка показателей спортсменов') {
            setType("Оценка показателей спортсменов")
            setIsName(labelsMoth)
            //         dispatch({ type: Admin })
            //         setTitlePosition("админа")

        }
        else if (type === 'Достижения клубов') {
            setType("Достижения клубов")
            setIsName(labels1)
            //         dispatch({ type: Florists })
            //         setTitlePosition("флориста")
        }
    }

    const data = {
        labels,
        datasets: [
            {
                label: '',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: '',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };


    const datas = {
        labels,
        datasets: [
            {
                label: '',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                // backgroundColor: 'rgba(255, 99, 132, 0.5)',



            },
            {
                label: '',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                // backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };


    return (
        <div className={styles.content} >
            <h1 className={styles.content__title}>Статистика </h1>

            <select className={styles.selectCss} >
                {
                    nameClubs.map(item => (
                        <option value={item}> {item} </option>
                    ))
                }
            </select>

            <div className={styles.ButtonNavigations} >
                {TabТame.map(type => (
                    <Tab key={type}
                        active={active === type} onClick={() => onTabClick(type)}>
                        {type}</Tab>
                ))}
            </div>


            <div className={styles.chart} >
                {
                    type === 'Оценка показателя ОФП' || type === 'Достижения клубов' || type === '' ?
                        <Bar data={data} width={1323} height={616} className={styles.chart_diagram} /> : <Line className={styles.chart_diagram} data={data} />
                }

            </div>
        </div >
    )
}

export default Statistics;
