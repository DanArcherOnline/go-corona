import './App.css';
import CTABlock from './components/base/cta-block/cta-block.component';
import NavBar from './components/domain/landing/navbar/navbar.component';

function App() {

  const getStartedHandler = () => window.open('http://www.google.com', '_blank');

  return (
    <div>
      <div className="landing-section">
        <NavBar />
        <div className="landing-content">
          <div className="mid-section">
            <CTABlock
              title="Take care of yours family’s health."
              content={"All in one destination for COVID-19 health queries.\nConsult 10,000+ health workers about your concerns."}
              buttonText="Get Started"
              onClickButton={getStartedHandler}
            />
            <img src={process.env.PUBLIC_URL + '/doctor-patient-img.svg'} alt="patient and doctor" />
          </div>
        </div>
        {/* TODO make PlayVideoCTA component */}
        <div className="watch-video-item">
          <div className="watch-video">
            {/* TODO make PlayVideoIcon component */}
            <img src={process.env.PUBLIC_URL + '/play-video-icon.svg'} alt="play video icon" />
            <div className="watch-video-text-container">
              <p>Stay safe with GoCorona</p>
              <p>Watch Video</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
