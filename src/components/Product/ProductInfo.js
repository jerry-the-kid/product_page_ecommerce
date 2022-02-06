import React, {useContext, useState} from 'react';
import styles from './ProductInfo.module.scss';
import BtnContainer from "./BtnContainer";
import AppContext from "../store/app-context";



const ProductInfo = () => {
    const cartCtx = useContext(AppContext);
    const [amount, setAmount] = useState(1);

    const increaseAmountHandler = function (){
        if(amount >= 20) return;
        setAmount(prevState => prevState + 1);
    };

    const decreaseAmountHandler = function (){
        if(amount === 1) return;
        setAmount(prevState => prevState - 1)
    };

    const addItemHandler = function () {
        const item = {
            id: 1,
            img: '../../images/image-product-1-thumbnail.jpg',
            productName: 'Fall Limited Edition Sneaker',
            price: 125,
            amount: amount,
        };

        cartCtx.addItem(item);
    };




    return (
        <div className={styles['info__container']}>
            <div className={styles.info}>
                <h4 className={styles['info__description']}>Sneaker Company</h4>
                <h1 className={styles['info__title']}>Fall Limited Edition Sneakers</h1>
                <p className={styles['info__main-para']}>These low-profile sneakers are your perfect casual wear companion. Featuring a
                    durable rubber outer sole, they’ll withstand everything the weather can offer</p>
                <div className={styles['info__price-box-container']}>
                    <div className={styles['info__price-box']}>
                        <p className={styles['info__price']}>$125.00</p>
                        <span className={styles['info__discount']}>50%</span>
                    </div>
                    <p className={styles['info__actual-price']} style={{textDecoration: 'line-through'}}>$250.00</p>
                </div>
                <BtnContainer onClick = {addItemHandler} amount = {amount} onIncrease = {increaseAmountHandler} onDecrease = {decreaseAmountHandler} />
            </div>
        </div>
    );
};

export default ProductInfo;