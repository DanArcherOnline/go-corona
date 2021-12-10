import React from 'react';
import Button from '../button/button.component';
import styles from './cta-block.module.css';


const CTABlock = (props) => {
    return (
        <div className={styles.ctaBlock}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <Button onClick={props.onClickButton}>{props.buttonText}</Button>
        </div>
    );
}

export default CTABlock;