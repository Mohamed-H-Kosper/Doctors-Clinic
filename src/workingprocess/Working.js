import { Button } from 'react-bootstrap';
import './Working.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
function Working(){
    return(
        <section>
        <div className="container">
            <div className="row">
        <div className='container-text1'><h6 className='text1-section1'>Working Process</h6></div>
        <h2 className='text2-section1'>How we works?</h2>
        <div className='all-cards d-flex justify-content-between'>
            <div className="col-lg-4 col-md-4 card card1 ">
            <div data-aos='fade-right' data-aos-delay='1500' className='overlay'>
                    <h1 className='text-card1'>01</h1>
                    <h4 className='text-card2'>Make Appointmnet</h4>
                    <p className='text-card3'>Make an appointment that is convenient for you to consult your preferred doctor.</p>
                <Button id='Working-button'>View More<FontAwesomeIcon icon={faAnglesRight} className='WorkingIcon'/> </Button>
                </div>
                </div>
            <div data-aos='fade-up' data-aos-delay='1500' className="col-lg-4 col-md-4 card card2">
                    <h1 className='text-card1'>02</h1>
                    <h4 className='text-card2'>Take Treatment</h4>
                    <p className='text-card3'>After diagnosing the patient's condition, you must take the appropriate medications for treatment.</p>
                <Button id='Working-button'><span className='text-view'>View More</span><FontAwesomeIcon icon={faAnglesRight} className='WorkingIcon'/> </Button>
                </div>
            <div data-aos='fade-top' data-aos-delay='1500' className="col-lg-4 col-md-4 card card3">
                    <h1 className='text-card1'>03</h1>
                    <h4 className='text-card2'>Registration</h4>
                    <p className='text-card3'>RAlways take care of your health, register your data and contact us at any time.</p>
                <Button id='Working-button'><span className='text-view'>View More</span><FontAwesomeIcon icon={faAnglesRight} className='WorkingIcon'/> </Button>
                </div>
                </div>
            </div>
        </div>
        </section>
    )
}
export default Working;