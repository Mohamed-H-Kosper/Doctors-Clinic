import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from'../Images/Logo-nav.png';
import { Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDirections, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';
import './main-Navbar.css';
import { useEffect } from 'react';

function MainNavbar(){
  useEffect(()=>{
  const navs = document.querySelector('nav')
  const handleScroll = () =>{
if(window.scrollY > 0 ){
  navs.style.backgroundColor="white";
  navs.style.transition='0.5s';
}else{
  navs.style.backgroundColor="transparent";
  navs.style.transition='0.5s';
}
  }
window.addEventListener('scroll',handleScroll)
},[])

    return(
        <>
    <Navbar expand="lg" className='fixed-top' id='nav'> 
    <Container fluid>
        <Navbar.Brand  href="#home" className=' col-md-3 d-flex justify-content-center'> 
        <Image id='image' src={Logo}  alt='noPhoto'></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Offcanvas placement="end" id="basic-navbar-nav">
        <Image id='logo-offcanvas' className='d-none' src={Logo} alt='noPhoto'></Image>
          <Nav className="me-auto col-lg-12 col-md-12 d-flex justify-content-end" id='nav-right'>
            <Nav.Link href="#home" className='active'>Home</Nav.Link>
            <NavDropdown title="pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> FAQ's</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Booking</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Error 404</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Login / Register</NavDropdown.Item>
            </NavDropdown>
          
            <NavDropdown title="Servies" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Servies</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Servies Details</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Blog Details</NavDropdown.Item>
              </NavDropdown>
            <Nav.Link href="#home" id='link-contact'>Contact Us</Nav.Link>     
          
        <Nav.Item className='d-flex justify-content-between' id='nav-right'>
            <Nav.Link> <FontAwesomeIcon  icon={faSearch} className='searchICON'/> </Nav.Link> 
            <Nav.Link>  <FontAwesomeIcon icon={faPhone} className='phoneICON'/> </Nav.Link> 
            <Nav.Link>   <span className='number-span'>( +01 ) 999 888 777</span> </Nav.Link>
            <Nav.Link>  <Button id='nav-button' >CONTACT US<FontAwesomeIcon icon={faDirections}  className='contactIcon'/></Button></Nav.Link>
            </Nav.Item>
            </Nav>
            </Navbar.Offcanvas>
        </Container>
    </Navbar> 
    </>
);
}

export default MainNavbar;
