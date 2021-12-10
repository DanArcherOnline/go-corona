import './App.css';
import NavBar from './components/domain/landing/navbar/navbar.component';

function App() {
  return (
    <div>
      <div className="landing-section">
        {/* TODO make navbar component */}
        <NavBar />
        {/* TODO rename class name*/}
        <div className="mid-section2">
          <div className="mid-section">
            {/* TODO make CTA component */}
            <div className="title-text-cta">
              <h1>Take care of yours family’s health.</h1>
              <p>All in one destination for COVID-19 health queries.  </p>
              <p>Consult 10,000+ health workers about your concerns.</p>
              <button>Get Started</button>
            </div>
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
