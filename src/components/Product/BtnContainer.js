import React from 'react';
import styles from "./BtnContainer.module.scss";
import Btn from "../UI/Btn";
import plusIcon from "../../images/icon-plus.svg";
import minusIcon from "../../images/icon-minus.svg";
import cart from "../../images/icon-cart.svg";

const BtnContainer = (props) => {

    return (
        <div className={styles['btn-container']}>
            <div className={styles['btn-box']}>
                <Btn className={styles['btn']} icon={minusIcon} onClick = {props.onDecrease}/>
                <p><b>{props.amount}</b></p>
                <Btn className={styles['btn']} icon={plusIcon} onClick = {props.onIncrease}/>
            </div>
            <button className={styles['cart']} onClick={props.onClick}>
                <img src={cart} alt='add to cart' className={styles['cart-icon']}/> Add to cart
            </button>
        </div>
    );
};

export default BtnContainer;