import React from 'react';
import styles from "./ItemList.module.css"
import {useNavigate} from "react-router-dom"

const ItemList = (props) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/deal/${props.id}`)} key={props.id} className={styles['item_list']}>
            <div className={styles['img_box']}>
                <img className={styles['title_img']} src={props.titleImg} alt="아이템 타이틀 이미지"/>
                <img className={styles['item_img']} src={props.itemImg} alt="아이템 이미지"/>
                <img className={styles['sub_img']} src={props.subImg} alt="아이템 서브 이미지"/>
                <img className={styles['cir_img']} src={props.cirImg} alt="아이템 타이틀 circle이미지"/>
            </div>
            <div className={styles['info_desc']}>
                <span>{props.title}</span>
                <span>{props.price}￦</span>
            </div>
        </div>
    );
};

export default ItemList;