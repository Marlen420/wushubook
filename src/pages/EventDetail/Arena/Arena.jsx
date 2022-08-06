import React, { useState } from 'react';
import styles from './style.module.css';
import Select from 'react-select';

const Square = ({index}) => {
  return (
    <div className={styles.sub_square_item}>
      <p className={styles.square_title}>Площадка {index}</p>
    </div>
  )
}

const getRowsCount = (divs) =>{
  if (divs === 4) return 2;
}

const Arena = ({list, divs}) => {
  
  console.log(list);

  return (
    <>
      {/* <div className={styles.select_holder}>
        <label htmlFor="vertical divs">Количество вертикальных делений</label>
        <Select 
          options={[
            {value: 1, label: '1'},
            {value: 2, label: '2'},
          ]}
          value={{value: verticalDivs, label: `${verticalDivs}`}}
          onChange={(e)=>setVerticalDivs(e.value)}
          name="vertical divs"/>
        <label htmlFor="vertical divs">Количество горизонтальных делений</label>
        <Select 
          options={[
            {value: 1, label: '1'},
            {value: 2, label: '2'},
            {value: 3, label: '3'},
            {value: 4, label: '4'},
          ]} 
          value={{value: horizontalDivs, label: `${horizontalDivs}`}}
          onChange={(e)=>setHorizontalDivs(e.value)}
          name="vertical divs"/>
      </div> */}
      <div className={styles.arena_holder}>
        <div className={styles.judge_side}>
          <div className={styles.judge_place} />
          <div className={styles.judge_place} />
          <div className={styles.judge_place} />
          <div className={styles.judge_place} />
          <div className={styles.judge_place} />
          <div className={styles.judge_place} />
          <div className={styles.judge_place} />
          <div className={styles.judge_place} />
        </div>
        <div className={styles.arena_square}>
          <div className={styles.arena_wards_holder}>
            <p className={styles.arena_wards_north}>Север</p>
            <p className={styles.arena_wards_west}>Запад</p>
            <p className={styles.arena_wards_south}>Юг</p>
            <p className={styles.arena_wards_east}>Восток</p>
          </div>
          {
            list[0].arena === 'Север-Юг' &&
            <div className={styles.square_row}>
              <Square index={1}/>
            </div>
          }
          {
            (list[0].arena === 'Запад' || list[0].arena === 'Восток') &&
            <div className={styles.square_row}>
              <Square index={1}/>
              <Square  index={2}/>
            </div>
          }
          {
            (list[0].arena === 'Север' || list[0].arena === 'Юг') &&
            <>
              <div className={styles.square_row}>
                <Square index={1}/>
              </div>
              <div className={styles.square_row}>
                <Square  index={2}/>
              </div>
            </>
          }
        </div>
        <div className={styles.judge_side}>
          <div className={styles.judge_place} />
          <div className={styles.judge_place} />
          <div className={styles.judge_place} />
          <div className={styles.judge_place} />
          <div className={styles.judge_place} />
          <div className={styles.judge_place} />
          <div className={styles.judge_place} />
          <div className={styles.judge_place} />
        </div>
      </div>
    </>
  )
}

export default Arena