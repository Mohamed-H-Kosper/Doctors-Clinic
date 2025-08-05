import { faFacebook, faFacebookF, faFacebookMessenger, faFacebookSquare, faInstagram, faLinkedin, faSquareFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LOGO from '../../Images/Logo-nav.png';
import imageFooter from '../../Images/image-footer.png';
import waves from '../../Images/waves-background.png';
import { Button, Image } from "react-bootstrap";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import './Footer.css';
function Footer(){
    return(
    <footer className="text-center text-lg-start  text-muted ">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      
        </section>
      
        <section >
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                 <Image src={LOGO} />
                </h6>
                <p className="pargarph">
                We Provide All Health Care Solution
                Protect Your Health And Take Care To Of Your Health
                </p>
                <div className="numberPhone">
               <p> <FontAwesomeIcon icon={faPhone} className="iconPhone" /></p>
               <div className="contact">
                 <span className="spanContact">Contact Us</span> 
                <h5 className=" number "> +01 123 456 7890</h5>
                </div>
                </div>
                
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 Links">
                Quick Links
                </h6>
                
                <Image className= "imageFooter" src={imageFooter}/>
                
                <p>
                  <a href="#!" className="link"> About Us</a>
                </p>
                <p>
                  <a href="#!" className="link">Services</a>
                </p>
                <p>
                  <a href="#!" className="link">Booking</a>
                </p>
                <p>
                  <a href="#!" className="link">Faq's</a>
                </p>
                <p>
                  <a href="#!" className="link">Blogs</a>
                </p>
                <p>
                  <a href="#!" className="link">OurTeam</a>
                </p>
              </div>
      
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 Links">
                Our Service
                </h6>

                <Image className= "imageFooter" src={imageFooter}/>

                <p>
                  <a href="#!" className="link">Dental Care</a>
                </p>
                <p>
                  <a href="#!" className="link">Cardiac Clinic</a>
                </p>
                <p>
                  <a href="#!" className="link">Massege Therapy</a>
                </p>
                <p>
                  <a href="#!" className="link">Cardiology</a>
                </p>
                <p>
                  <a href="#!" className="link">precise Diagnosis</a>
                </p>
                <p>
                  <a href="#!" className="link">Abmbulance Services</a>
                </p>
              </div>
             
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4 Links">Subcribe </h6>

                <Image className= "imageFooter" src={imageFooter}/>

                <p><input type="text" placeholder="Email Address " className="mt-1 EmailAddress" /></p>
                <Button className="button-footer mt-3"> Subcribe Now</Button> 
                <p className="mt-4 icon-links">
                    <FontAwesomeIcon icon={faSquareFacebook}   />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faLinkedin} />
                </p>
              </div>
            </div>
          </div>
        </section>
      
        <div className="text-center p-4 Copyright">
        Copyright © 2024 Design & Developed by 
          <a className="CopyrightName fw-bold ms-2 " href="https://mdbootstrap.com/">Mohamed Kosper</a>
        </div>
      </footer>
      )
}
export default Footer
