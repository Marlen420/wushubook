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
  const [verticalDivs, setVerticalDivs] = useState(()=>divs > 2 ? 2 : 1);
  const [horizontalDivs, setHorizontalDivs] = useState(()=>divs > 2 ? (divs / 2) : divs);
  const [renderList, setRenderList] = useState(list.length > 2 ? [[...list.slice(0, list.length / 2)], [...list.slice(list.length / 2, list.length)]] : [list])

  console.log(renderList);

  return (
    <>
      <div className={styles.select_holder}>
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
      </div>
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
          {
            renderList.map((_, i)=>(
              <div 
                key={i}
                className={styles.square_row}>
                {
                  renderList[i].map((_, j)=>(
                    <Square key={j} index={i === 0 ? j+1 : Math.floor(divs/2+1+j)}/>
                  ))
                }
              </div>
            ))
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