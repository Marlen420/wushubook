import styles from './style.module.css';

const Table = () => {
    return(
        <table className={styles.table_holder}>
            <thead>
                <tr>
                    <th rowSpan="4">ФИО</th>
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
                {(new Array(10)).fill(0).map((_, index)=>(
                    <tr key={index}>
                        <td>&nbsp;</td>
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
    )
}

export default Table;