import './App.css';
import CTABlock from './components/base/cta-block/cta-block.component';
import NavBar from './components/domain/landing/navbar/navbar.component';
import ViewVideoGroup from './components/domain/landing/view-video-group/view-video-group.component';

function App() {

  const getStartedHandler = () => window.open('http://www.google.com', '_blank');

  return (
    <div>
      <div className="landing-section">
        <div className='redBox' />
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
        <div className="watchVideoItem">
          <ViewVideoGroup />
        </div>
      </div>
    </div>

  );
}

export default App;
