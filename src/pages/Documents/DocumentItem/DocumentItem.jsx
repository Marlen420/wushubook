import { Trash } from '@skbkontur/react-icons';
import React, { useState } from 'react';
import { PdfIcon } from '../../../images/inedex';
import styles from './style.module.css';

const DocumentItem = ({item, deleteItem}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredTrash, setIsHoveredTrash] = useState(false);

    const onMouse = () => setIsHovered(true);
    const outMouse = () => setIsHovered(false);
    const onMouseTrash = () => setIsHoveredTrash(true);
    const outMouseTrash = () => setIsHoveredTrash(false);

    const handleDeleteItem = () => deleteItem(item.id);

    return (
        <div 
            className={styles.item_holder}
            onMouseEnter={onMouse}
            onMouseLeave={outMouse}>
            {/* {isHovered && <img src={Trash}/>} */}
            {isHovered && 
                <Trash
                    onClick={handleDeleteItem}
                    onMouseEnter={onMouseTrash}
                    onMouseLeave={outMouseTrash}
                    name="trash" 
                    color={!isHoveredTrash ? "#6F6F6F" : "red"}
                    className={styles.trash_icon}/>}
            <img src={PdfIcon} className={styles.pdf_icon}/>
            <p className={styles.item_title}>{item.title}</p>
            <p className={styles.item_size}>{item.size}</p>
        </div>
    )
}

export default DocumentItem;