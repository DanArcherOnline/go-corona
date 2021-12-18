import React from 'react';
import Button from '../../../base/button/button.component';
import styles from './navbar.module.css';


const NavBar = () => {
    const downloadHandler = () => window.open('http://www.google.com', '_blank');

    return (
        <nav className={styles.topNav}>
            <ul>
                <img className={styles.menuButton} src={process.env.PUBLIC_URL + '/menu-icon.svg'} alt="menu button" />
                <img className={styles.logo} src={process.env.PUBLIC_URL + '/logo.svg'} alt="corona go logo" />
                <div className={styles.menuItems}>
                    <div className={styles.menuPageItems}>
                        <a href="http://google.com">Home</a>
                        <a href="http://google.com">Features</a>
                        <a href="http://google.com">Support</a>
                        <a href="http://google.com">Contact Us</a>
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button color="blue" onClick={downloadHandler}>Download</Button>
                    </div>
                </div>
            </ul>
        </nav>
    );
}

export default NavBar;