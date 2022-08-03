import React, { useState } from 'react';
import { Button } from '../../../components';
import { Process } from '../../../images/inedex';
import Arena from '../Arena/Arena';
import ProtocolTable from '../ProtocolTable/ProtocolTable';
import styles from './style.module.css';

const ProtocolHolder = ({list, handleCreateArena, isOpenArena}) => {
  const [ subgroupState, setSubgroupState ] = useState(0);
  return (
    <div className={styles.protocol_holder}>
      <h1 className={styles.protocol_header_title}>Протокол соревнований</h1>
      <div className={styles.protocol_subgroups}>
        {list.map((_, i)=>(
          <button 
            key={i}
            className={styles.subgroup_state + ' ' + (subgroupState === i && styles.active_subgroup)}
            type="button"
            onClick={()=>setSubgroupState(i)}>Подгруппа {i+1}</button>
        ))}
      </div>
      <ProtocolTable list={list[subgroupState]}/>
      <div className={styles.button_holder}>
        <Button
          type="button"
          onClick={handleCreateArena}>
          <img src={Process} alt="icon"/>
          Сформировать арену
        </Button>
      </div>
      {
        isOpenArena &&
        <Arena divs={list[subgroupState].length} list={list[subgroupState]}/>
      }
    </div>
  )
}

export default ProtocolHolder;