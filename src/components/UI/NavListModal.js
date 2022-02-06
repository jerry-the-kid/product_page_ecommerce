import React from 'react';
import ListItem from "../Navbar/ListItem";
import styles from './NavListModal.module.scss';
import closeIcon from '../../images/icon-close.svg';
import Btn from "./Btn";

const NavListModal = (props) => {
    return (
        <ul className={styles.modal}>
            <Btn icon={closeIcon} className={styles.close} onClick={props.onClick}/>
            <ListItem/>
        </ul>
    );
};

export default NavListModal;