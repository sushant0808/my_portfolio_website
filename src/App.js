import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { GiHamburgerMenu } from 'react-icons/gi'
import { Col, Modal, Row } from 'react-bootstrap';
import me from './assets/me.jpg'
import { BsHouseDoorFill } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { MdOutlineMiscellaneousServices } from 'react-icons/md'
import { RiSlideshowFill } from 'react-icons/ri';
import { TfiMapAlt } from 'react-icons/tfi';
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai'
import Home from './components/Home';
import About from './components/About';
import EducationDetails from './components/EducationDetails';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Aos from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  // Below function is used to toggle offcanvas
  const toggleSidebar = () => {
    console.log('calllllllleeeeeeeddddd');
    const leftHeader = document.querySelector(".left-header");
    const mainContent = document.querySelector(".main-content");

    leftHeader.classList.toggle("close-header");
    // mainContent.classList.toggle("expand-main-content");
    // mainContent.classList.add("expand-main-content");
  }

  // Below function will automatically toggle offcanvas on page rezise condition
  function handleOffcanvasDisplay() {
    const leftHeader = document.querySelector(".left-header");
    const documentWidth = document.body.clientWidth;

    // Here below if and else will execute when page is loaded for the first time, and in that case I want the offcanvas to be closed when website is viewed in device whose screen size is less than 1200px
    if (documentWidth <= 1200) {
      console.log('Executed')
      leftHeader.classList.add("close-header");
    } else {
      leftHeader.classList.remove("close-header");
    }

    window.onresize = () => {
      const leftHeader = document.querySelector(".left-header");
      const documentWidth = document.body.clientWidth;


      // if (documentWidth <= 1200) {
      //   leftHeader.classList.add("close-offcanvas");
      //   mainContent.classList.add("expand-main-content");

      // } else {
      //   leftHeader.classList.remove("close-offcanvas");
      //   mainContent.classList.remove("expand-main-content")
      // }


      if (documentWidth <= 1200) {
        leftHeader.classList.add("close-header");
      } else {
        leftHeader.classList.remove("close-header");
      }
    }

  }

  useEffect(() => {
    handleOffcanvasDisplay()
  }, [])

  return (
    <>


      <div className='left-header d-flex flex-column justify-content-between'>
        <div className='left-header-top'>
          <Row className="" style={{ padding: '60px 0 0px 0' }}>
            <Col className="left-header-top-img text-center">
              <img src={me} className="header-img img-fluid" />
              <h5 className='text-light name'>SUSHANT</h5>
            </Col>
          </Row>
        </div>

        <div className='left-header-navigation'>
          <Row className=''>
            <a href="#home" className='nav-links'>
              <Col className='ms-4 col-12'>
                <span className='me-2 navigation-icons'><BsHouseDoorFill /></span>
                <span className='naviagtion-text'>HOME</span>
              </Col>
            </a>
            <a href="#about" className='nav-links'>
              <Col className='ms-4 col-12'>
                <span className='me-2 navigation-icons'><AiOutlineUser /></span>
                <span className='naviagtion-text'>ABOUT ME</span>
              </Col></a>
            <a href="#experience" className='nav-links'>
              <Col className='ms-4 col-12'>
                <span className='me-2 navigation-icons'><MdOutlineMiscellaneousServices /></span>
                <span className='naviagtion-text'>EXPERIENCE & SKILLS</span>
              </Col></a>
            <a href="#portfolio" className='nav-links'>
              <Col className='ms-4 col-12'>
                <span className='me-2 navigation-icons'><RiSlideshowFill /></span>
                <span className='naviagtion-text'>PORTFOLIO</span>
              </Col></a>
            <a href="#contact" className='nav-links'>
              <Col className='ms-4 col-12'>
                <span className='me-2 navigation-icons'><TfiMapAlt /></span>
                <span className='naviagtion-text'>CONTACT ME</span>
              </Col></a>
          </Row>
        </div>

        <div className='' style={{ height: 'auto' }}>
          <div className='left-header-footer d-flex align-items-center justify-content-center gap-4'>
            <a href="https://www.facebook.com/profile.php?id=100066159140572" className='text-light' target="_blank">
              <span>
                <GrFacebookOption />
              </span>
            </a>
            <a href="https://www.instagram.com/sushantmore0808/" className='text-light' target="_blank">
              <span>
                <AiOutlineInstagram />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/sushant-sunil-more-8b197b195/" className='text-light' target="_blank">
              <span>
                <FaLinkedinIn />
              </span>
            </a>

            <a href="" className='text-light' target="_blank">
              <span>
                <AiOutlineTwitter />
              </span>
            </a>


          </div>
        </div>


      </div>

      <main className='main-content' style={{ backgroundColor: '#10101A' }}>
        <div className='d-flex justify-content-end toggle-offcanvas-div'>
          <GiHamburgerMenu onClick={toggleSidebar} className="toggle-offcanvas-btn" style={{ display: 'none' }} />
        </div>

        {/* Home component starts here */}
        <section>
          <Home />
        </section>

        {/* About component starts here */}
        <section data-aos="fade-up">
          <About />
        </section>

        {/* Education details component starts here */}
        <section data-aos="fade-up">
          <EducationDetails />
        </section>

        {/* Experience details starts here */}
        <section data-aos="flip-left">
          <Experience />
        </section>

        {/* Portfolio details starts here */}
        <section data-aos="fade-up">
          <Portfolio />
        </section>

        {/* Contact me starts here */}

        <section data-aos="fade-up">
          <Contact />
        </section>
      </main>
    </>
  )
}

export default App;
