import './App.css';

function App() {
  return (
    <div>
      <div className="landing-section">
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
              <button>Download</button>
            </div>
          </ul>
        </nav>
        {/* TODO rename class name*/}
        <div className="mid-section2">
          <div className="mid-section">
            <div className="title-text-cta">
              <h1>Take care of yours family’s health.</h1>
              <p>All in one destination for COVID-19 health queries.  </p>
              <p>Consult 10,000+ health workers about your concerns.</p>
              <button>Get Started</button>
            </div>
            <img src={process.env.PUBLIC_URL + '/doctor-patient-img.svg'} alt="patient and doctor" />
          </div>
        </div>
        <div className="watch-video-item">
          <div className="watch-video">
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
