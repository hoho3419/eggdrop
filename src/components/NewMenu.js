import React from 'react';
import styles from  "./NewMenu.module.css";
import {useNavigate} from "react-router-dom"

const NewMenu = (props) => {
    const navigate = useNavigate()
    return (
        <div className={styles['new_menu']}>
            <div className={styles['bg_box']} style={{backgroundColor: props.item[0].opt_color}}>
                <h2>NEW EGGDROP</h2>
                <div className={styles['item_info']}>
                    <img src={props.item[0].title_img} className={styles["title_img"]} alt='샌드위치 이름 이미지'/>
                    <div className={styles['desc_box']}>
                        <div className={styles['title']}>
                            {props.item[0].title}
                        </div>
                        <div className={styles['desc']}>
                             {props.item[0].desc}
                        </div>
                        <div onClick={() => navigate(`/deal/${props.item[0].item_no}`)} className={styles['link_box']}>
                            자세히 보기 <div />
                        </div>
                    </div>
                        <img className={styles['item']} src={props.item[0].src} alt='샌드위치 이미지'/>
                        <img src={props.item[0].cir_img} className={styles["cir_img"]} alt='샌드위치 이름 이미지'/>
                </div>
            </div>
        </div>
    );
};

export default NewMenu;