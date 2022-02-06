import React from 'react';
import ProductInfo from "./ProductInfo";
import Previews from "./Previews";
import styles from './Product.module.scss';

const Product = () => {
    return (
        <main className={styles.product}>
            <Previews/>
            <ProductInfo/>
        </main>
    );
};

export default Product;