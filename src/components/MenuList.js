import React, { useState } from 'react';
import ItemList from './ItemList';
import styles from "./MenuList.module.css"

const MenuList = (props) => {
    const [itemState,setItemState] = useState(0);

    return (
        <div className={styles['menu_list']}>
            <div className={styles['category']}>
                {props.header.map((el,idx) => (
                    <div 
                    key={idx}
                    onClick={() => setItemState(idx)}
                    className={[styles.list , idx === itemState ? styles.list_active : ""].join(" ")}>
                        <span>{el}</span>
                    </div>
                ))}
            </div>
            <div className={styles['list_box']}>
                {props.items[itemState].map((el) =>(
                    <ItemList 
                    id={el.item_no}
                    key={el.item_no}
                    titleImg={el.title_img}
                    itemImg={el.src}
                    subImg={el.sub_src}
                    cirImg={el.cir_img}
                    title={el.title}
                    price={el.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default MenuList;