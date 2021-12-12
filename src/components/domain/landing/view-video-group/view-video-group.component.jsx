import React from 'react';
import PlayVideoButton from '../../../base/play-video-button/play-video-button.component';
import styles from './view-video-group.module.css';


const ViewVideoGroup = (props) => {
    const onClickHandler = () => {
    }

    return (
        <div className={styles.watchVideo}>
            <PlayVideoButton />
            <div className={styles.watchVideoTextContainer}>
                <p>Stay safe with GoCorona</p>
                <p>Watch Video</p>
            </div>
        </div>
    );
}

export default ViewVideoGroup;