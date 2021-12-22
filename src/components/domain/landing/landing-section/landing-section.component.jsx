import { useMediaQuery } from 'react-responsive';
import CTABlock from '../../../base/cta-block/cta-block.component';
import PlayVideoButton from '../../../base/play-video-button/play-video-button.component';
import NavBar from '../navbar/navbar.component';
import ViewVideoGroup from '../view-video-group/view-video-group.component';
import styles from './landing-section.module.css';

function LandingSection() {

    const isMobileLayout = useMediaQuery({ query: '(max-width: 860px)' })

    const getStartedHandler = () => window.open('http://www.google.com', '_blank');

    return (
        <div>
            <div className={styles.redBox} />
            <div className={styles.landingSection}>

                <NavBar />
                <div className={styles.landingContent}>
                    <div className={styles.midSection}>
                        <CTABlock
                            center={isMobileLayout}
                            title="Take care of your family’s :c:health."
                            emphasisColor="#4285F4"
                            content={"All in one destination for COVID-19 health queries.\nConsult 10,000+ health workers about your concerns."}
                            buttonText="Get Started"
                            onClickButton={getStartedHandler}
                        />
                        <div className={styles.doctorPatient}>
                            <PlayVideoButton fillStyle='fill' className={styles.playButton} />
                            <img
                                src={process.env.PUBLIC_URL + '/doctor-patient-img.svg'}
                                alt="patient and doctor"
                            />
                        </div>
                    </div>

                </div>
                <div className={styles.watchVideoItem}>
                    <ViewVideoGroup />
                </div>
            </div>
        </div>

    );
}

export default LandingSection;
