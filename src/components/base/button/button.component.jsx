import React from 'react';
import styles from './button.module.css';


const Button = (props) => {
    return (
        <button
            className={`${styles.button} ${styles[props.color] ?? styles['red']}`}
            onClick={props.onClick}
        >
            {props.children}
        </button >
    );
}

export default Button;