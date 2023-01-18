import React, { useEffect, useState } from 'react';
import { MAIN_BANNER } from '../util/itemlist';
import MyButton from '../util/MyButton';
import styles from "./MainSlide.module.css";

const MainSlide = () => {
    const [banner,setBanner] = useState(0);
    useEffect(() => {
        setBanner(0)
    },[])
    const increases = () =>{
        if(banner === (MAIN_BANNER.length - 1) ){
            setBanner(0)
        }
        else{
            setBanner(banner + 1)
        }
    }
    const decreases = () =>{
        if(banner === 0){
            setBanner(MAIN_BANNER.length - 1)
        }
        else{
            setBanner(banner - 1)
        }
    }
    const scrollToTop = () => {
        window.scroll({
            top: 880,
            behavior: 'smooth'
        })
    }
    return (
        <div  className={styles['main_slide']}>
            <div  className={styles['img_box']}>
                {MAIN_BANNER.map((el,idx) =>(
                    <img 
                    src={el.src}
                    key={el.item_no}
                    alt='메인배너'
                    className={[styles.main_banner,banner === +idx ? styles.main_banner_active : ""].join(" ")}
                    />
                ))}
                <div className={styles['control_box']}>
                    <MyButton text={"<"} onClick={() =>decreases()}/>
                    <span>{banner + 1}</span>
                    <span>/</span>
                    <span>{MAIN_BANNER.length}</span>
                    <MyButton text={">"} onClick={() =>increases()}/>
                </div>
                <div onClick={() => scrollToTop()} className={styles['scroll_down']}>
                    <span>SCROLL DOWN</span>
                    <span>▼</span>
                </div>
            </div>
        </div>
    );
};

export default MainSlide;