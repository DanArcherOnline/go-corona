import React from 'react';
import Button from '../button/button.component';
import styles from './cta-block.module.css';


const CTABlock = (props) => {
    const alignmentStyles = () => props.center ? styles.center : styles.left;
    const parsedTitle = () => {
        const titleText = props.title;
        const titleTexts = titleText.split(":c:");

        return titleTexts.map((titleSpan, i) => {
            if (i % 2 === 0) {
                return (titleSpan);
            } else {
                return (<span key={i} style={{ color: props.emphasisColor ?? '#EC5863' }}>{titleSpan}</span>);
            }
        });
    }

    return (
        <div className={`${styles.ctaBlock} ${alignmentStyles()}`}>
            <h1>{parsedTitle()}</h1>
            <p>{props.content}</p>
            <Button onClick={props.onClickButton}>{props.buttonText}</Button>
        </div>
    );
}

export default CTABlock;