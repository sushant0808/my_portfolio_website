import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import me1 from '../assets/me1.png';
import me2 from '../assets/me2.png';
import me3 from '../assets/me3.png';
import me4 from '../assets/me4.png';

const About = () => {
    return (
        <>
            <Container className='about-container' id="about">
                <Row className='justify-content-center gap-5'>
                    <Col className='about-left-div' lg={5}>
                        <Row>
                            <Col style={{ padding: '0 6px' }}>
                                <img src={me1} className='img-fluid about-image' />
                                <img src={me2} className='img-fluid about-image' style={{ marginTop: '12px' }} />
                            </Col>
                            <Col className='mt-4' style={{ padding: '0 6px' }}>
                                <img src={me3} className='img-fluid about-image' />
                                <img src={me4} className='img-fluid about-image' style={{ marginTop: '12px' }} />
                            </Col>
                        </Row>
                    </Col>
                    <Col className='about-right-div text-white pt-4' lg={6}>
                        <h3 className='about-title'>
                            ABOUT ME
                            <div className='line'></div>
                        </h3>
                        <p className='about-subtitle'>I'm a Full Stack Developer with over 1 year of experience.</p>
                        <p className='about-description'>
                            I am from India, mumbai. I am passionate about coding and building cool stuffs with it. I love to build dynamic and responsive websites for my client's. My ultimate motive is to solve my client's problem using the best technologies available and to provide the best services.
                        </p>
                        <p className='about-description mt-0 ok'>
                            I like to work with new people, learn new things, and do stuffs which would help me grow in future. I love to read motivational books and play cricket in my free time.
                        </p>
                        <div className='d-flex gap-3 mt-4'>
                            <a href='#contact' className='download-cv-btn'>
                                Contact Me
                            </a>
                            <a href='#portfolio' className='download-cv-btn'>
                                Portfolio
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About