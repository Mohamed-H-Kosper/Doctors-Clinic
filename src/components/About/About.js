import { Button, Image } from 'react-bootstrap';
import Aimage1 from '../../Images/About-image1.jpg';
import Aimage2 from '../../Images/About-image2.jpg';
import Aimage3 from '../../Images/About-image3.jpg';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmbulance, faBed , faHouseMedical, faSuitcaseMedical } from '@fortawesome/free-solid-svg-icons';
function About() {
  return (
    <div className="container">
      <div className="row">
        <div  className="AboutUs">
          <div  className="image-about col-lg-6 col-md-12 col-sm-12 ">
          <Image data-aos='fade-right' data-aos-delay='1000'   src={Aimage1} alt='Nophoto' className='Aimage1'/>
          <Image data-aos='fade-up' data-aos-delay='1000'    src={Aimage2} alt='Nophoto' className='Aimage2'/>
          <Image data-aos='fade-right' data-aos-delay='1000'    src={Aimage3} alt='Nophoto' className='Aimage3'/>
          <div>
          <h2 data-aos='fade-left' data-aos-delay='500'  className='text-left'>20 <p>Year Experience</p></h2>
          </div>
          </div>
          <div className="text-about col-lg-6 col-md-12 col-sm-12 ">
            <h5 data-aos='fade-down' data-aos-delay='500'   className='text-about1'>About Us</h5>
            <h2 data-aos='fade-right' data-aos-delay='500'   className='text-about2'>The Great Place Of Medical Hospital Center</h2>
            <p data-aos='fade-up' data-aos-delay='500'   className='text-about3'>We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital</p>
            <div   className='icons-about'>
          <div data-aos='fade-right' className=' icon icon1'>
            <FontAwesomeIcon data-aos='fade-up' data-aos-delay='1000'  icon={faAmbulance} className='icon-image1'/>
                  <p data-aos='fade-up' data-aos-delay='1000'   className='text-icon'>Emergency Help</p>
                  </div>
                  <div  data-aos='fade-right' className='icon icon2'>
                  <FontAwesomeIcon icon={faBed} className='icon-image2'/>
                  <p data-aos='fade-up' data-aos-delay='1000'   className='text-icon'>Qualified Doctors</p>
                  </div>
                  <div  data-aos='fade-right' className='icon icon3'>
                  <FontAwesomeIcon icon={faHouseMedical} className='icon-image3'/>
                  <p data-aos='fade-up' data-aos-delay='1000'   className='text-icon'> Best Professionals</p>
                  </div>
                  <div data-aos='fade-up' data-aos-delay='1000'   className='icon icon4'>
                  <FontAwesomeIcon icon={faSuitcaseMedical} className='icon-image4'/> 
                  <p data-aos='fade-up' data-aos-delay='1000'   className='text-icon'> Medical Treatment</p>
                  </div>
            </div>
            <Button data-aos='fade-up' data-aos-delay='1000'   href='#ReadMore' className='btn-read'>Read More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
