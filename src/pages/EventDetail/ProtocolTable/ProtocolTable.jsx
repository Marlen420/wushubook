import React from 'react';
import styles from './style.module.css';

const ProtocolTable = ({list}) => {
  return (
    <div className={styles.protocol_table}>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>ФИО участника</th>
            <th>Клуб</th>
            <th>Арена</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map((item)=>(
              <tr key={item.id}>
                <td className={styles.id_td}>{item.id}</td>
                <td className={styles.name_td}>
                  {item.sportsmans.map((item)=>(
                    <p key={item.id}>
                      {item.name}
                      <br/>
                    </p>
                  ))}
                </td>
                <td className={styles.club_td}>{item.club}</td>
                <td className={styles.arena_td}>{item.arena}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ProtocolTable