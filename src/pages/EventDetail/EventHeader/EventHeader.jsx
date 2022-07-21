import React from 'react';
import styles from './style.module.css';
import { Button } from '../../../components';
import { Process } from '../../../images/inedex';

const EventHeader = ({
    status,
    handleButtonClick
}) => {
    return (
        <div className={styles.header_holder}>
            <h1 className={styles.header_title}>Заявки на участие</h1>
            <div className={styles.button_holder}>
                <Button
                    type="button"
                    onClick={handleButtonClick}>
                    <img src={Process} alt="icon"/>
                    Сформировать протокол
                </Button>
            </div>
        </div>
    )
}

export default EventHeader;