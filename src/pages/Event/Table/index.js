import styles from './style.module.css';

const Table = () => {
    return(
        <table className={styles.table_holder}>
            <tr className={styles.table_row + ' ' + styles.table_header_row}>
                <th className={styles.table_header}>ФИО</th>
                <th className={styles.table_header}>Пол</th>
                <th className={styles.table_header + ' ' + styles.table_header_age}>Возраст</th>
                <th className={styles.table_header}>Клуб</th>
                <th className={styles.table_header}>
                    <tr className={styles.table_row + ' ' + styles.table_row_double}>
                        <th className={styles.table_header}>Цюань шу</th>
                    </tr>
                    <tr className={styles.table_row}>
                        <th className={styles.table_header}>Название комплекса</th>
                    </tr>
                </th>
                <th className={styles.table_header}>
                    <tr className={styles.table_row + ' ' + styles.table_row_double}>
                        <th className={styles.table_header}>Цисе</th>
                    </tr>
                    <tr className={styles.table_row}>
                        <th className={styles.table_header}>Название комплекса</th>
                    </tr>
                </th>
                <th className={styles.table_header}>
                    <tr className={styles.table_row}>
                        <th className={styles.table_header}>
                            <tr className={styles.table_row}>
                                <th className={styles.table_header_fill}>Тайцзи</th>
                            </tr>
                            <tr className={styles.table_row + ' ' + styles.table_header_row}>
                                <th className={styles.table_header}>Цюань шу</th>
                                <th className={styles.table_header}>Цисе</th>
                            </tr>
                        </th>
                    </tr>
                    <tr className={styles.table_row}>
                        <th className={styles.table_header}>Название комплекса</th>
                        <th className={styles.table_header}>Название комплекса</th>
                    </tr>
                </th>
                <th className={styles.table_header}></th>
            </tr>
        </table>
    )
}

export default Table;