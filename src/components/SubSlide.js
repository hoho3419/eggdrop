import React, {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import "./styles.css";
import styles from "./SubSlide.module.css"

const SubSlide = (props) => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const navigate = useNavigate();
    const updateScroll = () => {
            setScrollPosition(window.scrollY || document.documentElement.scrollTop);
        };
    
    useEffect(() => {
            window.addEventListener("scroll", updateScroll);
        }, [scrollPosition]);

  return (
    <div className={styles[props.className]}>
        <h2 className={scrollPosition >= props.height ? styles[props.scrollName] : ""} >{props.headText}</h2>
      <Swiper
        autoplay={{
          delay:2000,
          pauseOnMouseEnter: true
        }}
        slidesPerView={3}
        spaceBetween={10}
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination,Autoplay]}
        className={styles["mySwiper"]}
      >
        {props.items.slice(0,14).map((el,idx) => (
            <SwiperSlide key={idx}>
                <div className={styles["item_box"]} style={{backgroundColor: el.opt_color}}>
                    <img onDoubleClick={() => navigate(`/deal/${el.item_no}`)} className={styles["main_img"]} src={el.src} alt="세트 아이템 메뉴 이미지"/>
                    <img className={styles["circle_img"]} src={el.cir_img} alt="세트 아이템 메뉴 작은 이미지"/>
                    <div className={styles["item_desc"]}>
                        <span>{el.title}</span>
                    </div>
                </div>
                  
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SubSlide;
