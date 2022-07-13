import React from 'react';
import Pagination from '../../../components/Pagination';
import EventItem from '../EventItem/EventItem';
import ListHeader from '../ListHeader/ListHeader';
import style from './eventList.module.css';

const EventList = ({
    events,
    selected,
    isSelectedAll,
    isSelectedItem,
    onSelectAll,
    onSelectItem,
    currentData,
    currentPage,
    maxPage,
    jump,
    prev,
    next,
    onDelete,
}) => {
    return (
    <>
        <ListHeader
            isSelectedAll={isSelectedAll}
            onSelectAll={onSelectAll}/>
        <div className={style.event_list_holder}>
            <div className={style.event_list_inner}>
                {currentData().map((item)=>(
                    <EventItem
                        key={item.id}
                        item={item}
                        isSelectedItem={isSelectedItem}
                        onSelectItem={onSelectItem}
                        onDelete={onDelete}/>
                ))}
            </div>
            {maxPage > 1 &&
            <Pagination
                currentPage={currentPage}
                limitPerPage={10}
                onIndexClick={jump}
                onNextClick={next}
                onPrevClick={prev}
                max={maxPage}/>}
        </div>
    </>)
}

export default EventList