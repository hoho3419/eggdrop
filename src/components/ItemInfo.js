import React, { useContext, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./styles.css";
import MyButton from "../util/MyButton";
import styles from "./ItemInfo.module.css"
import { userItemDispatchContext,userItemStateContext } from "../App";

const ItemInfo = (props) => {
    const navigate = useNavigate();
    const {onAdd,onRemove} = useContext(userItemDispatchContext);
    const userCart = useContext(userItemStateContext);
    const [heartImgState,setHeartImgState] = useState(process.env.PUBLIC_URL + "/assets/EGGDROP/empty_heart.png")

    const cartchk =  userCart.filter((el) => (el.item_no === props.id))
    useEffect(() => {
        if(cartchk.length){
            setHeartImgState(process.env.PUBLIC_URL + "/assets/EGGDROP/full_heart.png")
        }else{
            setHeartImgState(process.env.PUBLIC_URL + "/assets/EGGDROP/empty_heart.png")
        }
    },[userCart,props.id,cartchk.length])
    
  return (
    <div className={styles["item_info"]} >
        <div className={styles["bg_box"]} style={{background: props.color}}>
            <h2>{props.desc}</h2>
            <h4>{props.title}</h4>
            {/* id,src,title_img,price,title */}
            <img onClick={() => cartchk.length ? onRemove(props.id)  : onAdd(props.id,props.src[0],props.title_img,props.price,props.title,props.color)} className={styles["heart"]} src={heartImgState} alt="찜하기 이미지"/>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className={styles["mySwiper"]}
            >
                {props.src.map((el, idx) => (
                <SwiperSlide style={{background: props.color}} key={idx}>
                    <img className={styles["deal_img"]} style={{background: props.color}} src={el} alt="아이템 이미지" />
                </SwiperSlide>
                ))}
            </Swiper>
            <img className={styles["deal_cir_img"]} src={props.cir_img} alt="아이템 이미지" />
            <div className={styles["price"]}>{(+props.price).toLocaleString()}원</div>
            <div onClick={() => navigate(`/deal/${props.nextId}`)} className={[styles.next_item,props.nextText ? "" : styles.dis_none].join(" ")}>
                <span>{props.nextText}</span>
                <img src={process.env.PUBLIC_URL + '/assets/EGGDROP/right-arrow.png'} alt="다음 아이템 버튼" />
            </div>
            <div onClick={() => navigate(`/deal/${props.PrevId}`)} className={[styles.prev_item,props.PrevText ? "" : styles.dis_none].join(" ")}>
                <span>{props.PrevText}</span>
                <img src={process.env.PUBLIC_URL + '/assets/EGGDROP/left-arrow.png'} alt="다음 아이템 버튼" />
            </div>
        </div>
        <div className={styles["btn_box"]}>
            <MyButton onClick={() => navigate('/menu')} className={styles["go_list"]} text="목록으로" >
                <div />
            </MyButton>
        </div>
    </div>
  );
};

export default ItemInfo;
