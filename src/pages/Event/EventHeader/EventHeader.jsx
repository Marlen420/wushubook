import React from 'react';
import style from './eventHeader.module.css';
import { Button } from '../../../components/index';

const EventHeader = ({
  handleNewEvent
}) => {
  return (
    <div className={style.header_holder}>
        <h2 className={style.header_title}>Мероприятия</h2>
        <div className={style.header_button_holder}>
            <Button
                type="button"
                onClick={handleNewEvent}
                projectType='add_user'>Создать мероприятие</Button>
        </div>
    </div>
  )
}

export default EventHeader