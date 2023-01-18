import React, { useContext, useState } from "react";
import {useNavigate} from "react-router-dom"
import styles from './Header.module.css'
import { userItemStateContext } from "../App";
import Hamberg, { SideBar } from "./Hamberg";

const bottom1 = [['NEW','EGGDROP\'S CHOICE','SANDWICH','SIDE','COFFEE','DRINK'],[],['BRAND','NOTICE','HISTORY'],['FAQ','고객문의'],[]]

export const Li = (props) =>{
    return (
        <li>
            {props.text}
        </li>
        )
}
export const HeaderLi = (props) =>{
  const userItem = useContext(userItemStateContext);
    return (
        <li className={props.id === 4 ? styles[props.liClass] : styles[props.OtherLiClass] }>
            <div 
            onMouseLeave={props.onMouseLeave} 
            onMouseEnter={props.onMouseEnter} 
            className={styles[props.menuClass]}>
              {props.id === 4 ? <img className={styles[props.cartClass]} src={process.env.PUBLIC_URL + "/assets/EGGDROP/shopping-cart.png"} alt="쇼핑카트 이미지" /> : " "}

              <span onClick={props.onClick}>
                <span>{props.menuText}</span>
                {props.id === 4 ? <span className={styles.cart_text}> {userItem.length ? userItem.length : "0"}개</span> : " "}
              </span>
            </div>
            <ul 
            className={[styles[props.childUl],props.active === 1 ? styles.bot_ul_active : ""].join(" ")}
            onMouseLeave={props.onMouseLeave} onMouseEnter={props.onMouseEnter}
            >
                {props.liText && props.liText.map((el,idx) => (
                    <Li key={idx} text={el}/>
                ))}
            </ul>
        </li>
    )
}

const Header = (props) => {
    const [header,setHeader] = useState(0)
    const navigate = useNavigate();
    const [hambergState,setHambergState] = useState(false)
  return (
    <header className={styles["header"]}>
      <div className={styles["header_area"]}>
        <Hamberg 
        onClickHamberg={() => setHambergState(!hambergState)}
        hambergState={hambergState}
        />
        <div onClick={() => navigate('/')} className={styles["logo"]}>
          로고
        </div>
        <img onClick={props.onShowCart} className={styles["ham_cart"]} src={process.env.PUBLIC_URL + "/assets/EGGDROP/shopping-cart.png"} alt="쇼핑카트 이미지" />
        <ul className={styles["menu_ul"]}>
            {['MENU','STORE','ABOUT','CONTANT','찜하기'].map((el,idx) => (
                <HeaderLi
                onClick={idx !== 4 ? () => navigate('/menu') : props.onShowCart} 
                key={idx}
                id={idx}
                menuText={el}
                liClass={'cart_area'}
                OtherLiClass={'header_li'}
                childUl={'bot_ul'}
                menuClass={'top_li'}
                cartClass={'cart'}
                liText={bottom1[idx]}
                onMouseEnter={() => setHeader(1)}
                onMouseLeave={() => setHeader(0)}
                active={header}
                />
            ))}
        </ul>
        <div 
        onMouseEnter={() => setHeader(1)} 
        onMouseLeave={() => setHeader(0)}
        className={[styles.menu_pan,header === 1 ? styles.pan_active : ""].join(" ")}
        ></div>
      </div>
      <SideBar 
      onClickHamberg={() => setHambergState(!hambergState)}
      hambergState={hambergState}
      onShowCart={props.onShowCart}
      />
    </header>
  );
};
HeaderLi.defaultProps = {
  userItem: []
}
export default React.memo(Header);