import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import nodejs from '../assets/nodejs.png';
import mongodb from '../assets/mongodb.png';
import java from '../assets/java.png';
import python from '../assets/python.png';
import bootstrap from '../assets/bootstrap.png';


const EducationDetails = () => {
    return (
        <>
            <Container className="education-container" id="education">
                <div>
                    <h2 className='education-title common-title-style'>
                        EDUCATION & SKILLS
                        <div className='line'></div>
                    </h2>
                </div>
                <Row className='justify-content-center'>
                    <Col lg={4} className='mt-5'>
                        <div className='education-div'>
                            <div className='education-1'>
                                <h6 className='college-name'>PTVA's Sathaye College</h6>
                                <p className="m-0 course-name">Bachelor in Information Technology</p>
                                <p className='course-grade'>Grade - 8.4/10</p>
                            </div>
                            <div className='education-2'>
                                <h6 className='college-name'>St. Andrew's College</h6>
                                <p className="m-0 course-name">HSC, Science</p>
                                <p className='course-grade'>Grade - 73.08%</p>
                            </div>
                            <div className='education-3'>
                                <h6 className='college-name'>St. Stanislaus High School - India</h6>
                                <p className="m-0 course-name">SSC</p>
                                <p className='course-grade'>Grade - 84.60%</p>
                            </div>
                        </div>
                    </Col>
                    <Col className='mt-5 ms-auto' lg={7}>
                        <Row className='justify-content-center'>
                            <Col xs={4}  md={3} className='skill-img'>
                                <img src={html} className='img-fluid w-75' />
                            </Col>
                            <Col xs={4}  md={3} className='skill-img'>
                                <img src={css} className='img-fluid w-75' />
                            </Col>
                            <Col xs={4}  md={3} className='skill-img'>
                                <img src={javascript} className='img-fluid w-75' />
                            </Col>
                            <Col xs={4}  md={3} className='skill-img'>
                                <img src={react} className='img-fluid w-75' />
                            </Col>
                            <Col xs={4}  md={3} className='skill-img'>
                                <img src={nodejs} className='img-fluid w-75' />
                            </Col>
                            <Col xs={4}  md={3} className='skill-img'>
                                <img src={mongodb} className='img-fluid w-75' />
                            </Col>
                            <Col xs={4} md={3}  className='skill-img'>
                                <img src={python} className='img-fluid w-75' />
                            </Col>
                            <Col xs={4}  md={3} className='skill-img'>
                                <img src={java} className='img-fluid w-75' />
                            </Col>
                            <Col xs={4} md={3} className='skill-img'>
                                <img src={bootstrap} className='img-fluid w-75' />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default EducationDetails