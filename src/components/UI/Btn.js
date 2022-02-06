import React from 'react';
import classes from './Btn.module.css';


const Btn = (props) => {
    const className = `${props.className} ${classes.btn}`;
    const iconSVG = {
       mask: `url(${props.icon}) no-repeat center`,
       WebkitMask: `url(${props.icon}) no-repeat center`
    }

    return (
        <button className={className} style={iconSVG} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Btn;