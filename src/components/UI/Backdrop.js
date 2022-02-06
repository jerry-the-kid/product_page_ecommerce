import React from 'react';
import classes from "./Backdrop.module.scss";

const Backdrop = (props) => {
    return (
        <div onClick={props.onClick} className={classes['back-drop']}>
        </div>
    );
};

export default Backdrop;