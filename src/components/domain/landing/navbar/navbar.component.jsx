import React from 'react';
import Button from '../../../base/button/button.component';
import styles from './navbar.module.css';


const NavBar = () => {
    return (
        <nav className={styles.topNav}>
            <ul>
                <img className={styles.logo} src={process.env.PUBLIC_URL + '/logo.svg'} alt="corona go logo" />
                <div className={styles.menuItems}>
                    <div className={styles.menuPageItems}>
                        {/* TODO add href links*/}
                        <a href="http://google.com">Home</a>
                        <a href="http://google.com">Features</a>
                        <a href="http://google.com">Support</a>
                        <a href="http://google.com">Contact Us</a>
                    </div>
                    <Button href="http://google.com">Download</Button>
                </div>
            </ul>
        </nav>
    );
}

export default NavBar;