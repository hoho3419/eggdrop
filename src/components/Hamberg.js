import React from "react";
import styles from "./Hamberg.module.css";
import { HeaderLi } from "./Header";
import {useNavigate} from "react-router-dom"

export const SideBar = (props) => {
    const navigate = useNavigate()

  return (
    <div className={[styles.ham_box , props.hambergState ? styles.ham_box_active : ""].join(" ")}>
      <div className={styles["side_ham_box"]}>
        <div onClick={props.onClickHamberg} className={styles["side_hamberg"]}>
          <div className={styles["line"]}></div>
          <div className={styles["line"]}></div>
          <div className={styles["line"]}></div>
        </div>
      </div>
      <ul className={styles["ham_menu_ul"]}>
        {["MENU", "STORE", "ABOUT", "CONTANT", "찜하기"].map((el, idx) => (
          <HeaderLi
            onClick={idx !== 4 ? () => navigate("/menu") : props.onShowCart}
            key={idx}
            id={idx}
            menuText={el}
            liClass={'cart_li'}
            OtherLiClass={'side_li'}
            menuClass={"child_li"}
            cartClass={"side_cart"}
          />
        ))}
      </ul>
    </div>
  );
};

const Hamberg = (props) => {
  return (
    <div onClick={props.onClickHamberg} className={styles["hamberg"]}>
      <div className={styles["line"]}></div>
      <div className={styles["line"]}></div>
      <div className={styles["line"]}></div>
    </div>
  );
};

export default Hamberg;
