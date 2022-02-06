import React, {useContext} from 'react';
import styles from "./Product.module.scss";
import appContext from "../store/app-context";
import Btn from "../UI/Btn";
import deleteIcon from '../../images/icon-delete.svg';


const Product = (props) => {
    const totals = props.price * props.amount;
    const appCtx = useContext(appContext);

    const removeItemHandler = function (id){
        appCtx.removeItem(id);
    }

    return (
        <div className={styles['product']}>
            <img className={styles['product__preview']} src={props.img} alt="Product"/>
            <div className={styles['product__info']}>
                <p className={styles['product__heading']}>{props.name}</p>
                <p className={styles['product__components']}>${props.price.toFixed(3)} x ${props.amount}</p>
                <p className={styles['product__totals']}><b>${totals.toFixed(2)}</b></p>
            </div>
            <Btn className={styles['product__delete']} icon={deleteIcon} onClick = {removeItemHandler.bind(null, props.id)}/>
        </div>
    );
};

export default Product;