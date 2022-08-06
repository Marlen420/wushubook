import { useEffect, useState } from 'react';
import styles from './style.module.css';
import { Input } from '../../../components/index';

const Table = ({setIsTableOpen, list}) => {

    const [isEdit, setIsEdit] = useState(false);

    console.log(isEdit);

    useEffect(()=>{
        setIsTableOpen(true);
        return () => setIsTableOpen(false);
    }, [])

    return(
        <div className={styles.table_container}>
            <table className={styles.table_holder}>
                <thead>
                    <tr>
                        <th style={{position: 'sticky', left: '0', zIndex: 50}} rowSpan="4">ФИО</th>
                        <th rowSpan="4">Пол</th>
                        <th rowSpan="4" style={{minWidth: '100px'}}>Возраст</th>
                        <th rowSpan="4">Клуб</th>
                        <th rowSpan="2">Цюань шу</th>
                        <th rowSpan="2">Цисе</th>
                        <th rowSpan="1" colSpan="2">Тайцзи цюань</th>
                        <th rowSpan="4">Дуайлянь(фамилия партнера)</th>
                        <th rowSpan="4">Групповые выступления (номер команды)</th>
                        <th rowSpan="4">Время выступления</th>
                        <th rowSpan="4">Уровень</th>
                        <th rowSpan="4">Примечание</th>
                    </tr>
                    <tr>
                        <th>Цюань шу</th>
                        <th>Цисе</th>
                    </tr>
                    <tr>
                        <th rowSpan="2" style={{padding: '10px 0px'}}>Название комплекса</th>
                        <th rowSpan="2" style={{padding: '10px 0px'}}>Название комплекса</th>
                        <th rowSpan="2" style={{padding: '10px 0px'}}>Название комплекса</th>
                        <th rowSpan="2" style={{padding: '10px 0px'}}>Название комплекса</th>
                    </tr>
                </thead>
                <tbody>
                    {(new Array(20)).fill(0).map((_, index)=>(
                        <tr key={index}>
                            <td
                                onClick={()=>{
                                    console.log("Hello")
                                    setIsEdit({i: index, column: 'name'})
                                }}
                                className={styles.sticky_data}>
                                &nbsp;
                                {
                                    (isEdit?.i === index && isEdit?.column === 'name') &&
                                    <Input />
                                }
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;