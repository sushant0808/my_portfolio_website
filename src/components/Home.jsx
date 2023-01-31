import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import Typed from 'react-typed';
import me from '../assets/me.jpg'
import { Button } from 'react-bootstrap';

const Home = () => {

    useEffect(() => {

    }, [])
    return (
        <>
            <Container className="home-container" id="home">
                <Row className='justify-content-center'>
                    <Col lg={7} className='d-flex justify-content-center flex-column text-light'>
                        <h3 className='text-1'>Hello, I am</h3>
                        <h2 className='text-2 my-2'>Sushant Sunil More</h2>
                        <p className='automatic-text'>A passionate {' '}

                            <Typed
                                strings={[
                                    'Full Stack Developer',
                                    'Freelancer',]}
                                typeSpeed={50}
                                backSpeed={50}
                                loop
                            />
                        </p>

                        <p className='home-description'>
                            I can design and develop services for customers of all sizes 👨‍👨‍👧‍👧. I can build both static and dynamic websites using trending technologies 💡. I love to read books and play cricket in my free time 💯.
                        </p>

                        {/* <Button >
                            Download CV
                        </Button> */}

                        <div className='mt-4'>
                            <a href='resume.pdf' download="resume.pdf" className='download-cv-btn'>
                                Download CV
                            </a>
                        </div>

                    </Col>
                    <Col lg={5} className='img-fluid home-right-side d-flex align-items-center justify-content-center mt-sm-5 mt-lg-0'>
                        <img src={me} className='home-image' />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home