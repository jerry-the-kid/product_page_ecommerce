import React from 'react';
import styles from './List.module.scss';
import ListItem from "./ListItem";

const List = () => {
    return <ul className={styles.list}>
        <ListItem/>
    </ul>;
};

export default List;