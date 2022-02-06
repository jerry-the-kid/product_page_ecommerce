import React, {useContext} from 'react';
import styles from './Modal.module.scss';
import Product from "./Product";
import Empty from "./Empty";
import appContext from "../store/app-context";


const CartModal = () => {
    const cartCtx = useContext(appContext);

    return (
        <div className={styles.modal}>
            <h4>Cart</h4>
            <div className={styles['modal__products']}>
                {!cartCtx.items.length && <Empty/>}
                {cartCtx.items.length > 0 && cartCtx.items.map(el => <Product key={el.id} img={el.img} id={el.id}
                                                                                name={el.productName} price={el.price}
                                                                                amount={el.amount}/>)}
                {cartCtx.items.length > 0 && <div className={styles['modal__footer']}>
                    <button className={styles['modal__products__co']}>Checkout</button>
                </div>}
            </div>
        </div>
    );
};

export default CartModal;