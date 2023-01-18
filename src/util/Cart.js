import React, { useContext } from "react";
import Modal from "./Modal";
import styles from "./Cart.module.css";
import { userItemDispatchContext } from "../App";
const Cart = (props) => {
    const {onRemove} = useContext(userItemDispatchContext);
  const CartItems = (
    <div className={styles["cart-items"]}>
      {props.item.length ? props.item.map((el) => (
        <div key={el.item_no} className={styles["cart_box"]} style={{background: el.opt_color}}>
            <div className={styles["cart_img_box"]}>
                <img className={styles["title_img"]} src={el.title_img} alt="아이템 이름 이미지" />
                <img className={styles["item_img"]} src={el.src} alt="아이템 이미지" />
                <span className={styles["title"]}>{el.title}</span>
            </div>
            <img onClick={() => onRemove(el.item_no)} className={styles["close_btn"]} src={process.env.PUBLIC_URL + "/assets/EGGDROP/close.png"} alt="취소 버튼"/>
            <span className={styles["item_price"]}>
                {(+el.price).toLocaleString()}원
            </span>
        </div>
      )): <div className={styles["no_list"]}>찜한 상품이 없습니다.</div>}
    </div>
  );

  return (
    <Modal onClick={props.onHideCart}>
      <div className={styles.total}>
        <span>메뉴</span>
        <span>가격</span>
      </div>
      {CartItems}
      <div className={styles.actions}>
        <button onClick={props.onHideCart} className={styles["button--alt"]}>
          닫기
        </button>
      </div>
    </Modal>
  );
};
export default Cart;
