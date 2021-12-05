import React from 'react';
import styles from './button.module.css';


const Button = (props) => {
    return (
        <form action="https://google.com">
            <button className={styles.button} href={props.href} {...props} >{props.children}</button>
        </form>

    );
}

export default Button;