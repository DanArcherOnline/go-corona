import './App.css';
import Button from './components/base/button/button.component';

function App() {
  return (
    <div>
      <div className="landing-section">
        {/* TODO make navbar component */}
        <nav className="top-nav">
          <ul>
            <img className="logo" src={process.env.PUBLIC_URL + '/logo.svg'} alt="corona go logo" />
            <div className="menu-items">
              <div className="menu-page-items">
                {/* TODO add href links*/}
                <a>Home</a>
                <a>Features</a>
                <a>Support</a>
                <a>Contact Us</a>
              </div>
              <Button href="http://google.com">Download</Button>
            </div>
          </ul>
        </nav>
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
