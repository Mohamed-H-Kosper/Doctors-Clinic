import { Button, Image } from "react-bootstrap";
import headerDoctor from "../../Images/header-doctor-image.png";
import animate1 from "../../Images/header-animation-1.png";
import animate2 from "../../Images/header-animation-2.png";
import animate3 from "../../Images/header-animation-3.png";
import animate4 from "../../Images/header-animation-4.png";
import animate5 from "../../Images/header-animation-5.png";
import "./Header.css";
import About from "../About/About";
import Working from "../../workingprocess/Working";


function Header() {
  return (
    <>
        <header >
      <div  className="container">
        <div className="row">
      <div   className="header">
          <div data-aos='fade-right' data-aos-delay='500' className=" col-lg-6 col-md-6 col-sm-6 header-left">
            <h4 data-aos='fade-right' data-aos-delay='500' id="header-text1"><span id="header-span">We Provide All Health Care Solution</span></h4>
            <h1 data-aos='fade-right' data-aos-delay='500' id="header-text2">Protect Your Health And Take Care To Of Your Health</h1>
            <Button  data-aos='fade-right' data-aos-delay='500' id="button-header">Read More</Button>
          </div>
            <div className=" col-lg-6 col-md-6 col-sm-6">
              <Image data-aos='fade-right' data-aos-delay='500'  src={headerDoctor} />
            </div>
            </div>
            <div  className="all-image-animate">
            <Image data-aos='fade-right' data-aos-delay='500' className='header-animation1' src={animate1}></Image>
            <Image data-aos='fade-right' data-aos-delay='500' className='header-animation2' src={animate2}></Image>
            <Image data-aos='fade-right' data-aos-delay='500' className='header-animation3' src={animate3}></Image>
            <Image data-aos='fade-right' data-aos-delay='500' className='header-animation4' src={animate4}></Image>
            <Image  data-aos='fade-right' data-aos-delay='500' className='header-animation5' src={animate5}></Image>
            </div>
              </div>
        </div>
      </header>
      <About />
      <Working />
    </>
  );
}
export default Header;
