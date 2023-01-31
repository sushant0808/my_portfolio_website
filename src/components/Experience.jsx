import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import exp1 from '../assets/experience1-img.png'
import exp2 from '../assets/experience2-img.png'

const Experience = () => {
    return (
        <>
            <Container className="experience-container" id="experience">
                <div>
                    <h2 className='experience-title common-title-style'>
                        EXPERIENCE
                        <div className='line'></div>
                    </h2>
                </div>
                <div className='justify-content-center'>
                    <div className='experience-div mt-5 w-100'>
                        <Row>
                            <Col md={2} lg={2} className='company-image'>
                                <img src={exp2} className='img-fluid' />
                            </Col>
                            <Col md={10} lg={10}>
                                <p className='job-role'>MERN stack developer</p>
                                <p className='company-name'>TCE - Global Influencer Agency  | July 2022 - Present</p>
                                <p className='job-description'>
                                    <ul>
                                        <li>Building server side api's</li>
                                        <li>Creating react components and integrating them with server side apis</li>
                                        <li>Performing CRUD operations.</li>
                                        <li>Communicating with python server for getting web scraped data and displaying using react</li>
                                    </ul>
                                </p>
                            </Col>
                        </Row>
                    </div>
                    <div className='experience-div w-100'>
                        <Row className=''>
                            <Col md={2} lg={2} className='company-image'>
                                <img src={exp1} className='img-fluid' />
                            </Col>
                            <Col md={10} lg={10} className=''>
                                <p className='job-role'>Full Stack Developer</p>
                                <p className='company-name'>Trycatch classes | Dec 2021 - July 2022</p>
                                <p className='job-description'>
                                    Worked with TryCatch group as an Intern. Got hands on experience on various web devlelopment technology like HTML, CSS, Bootstrap, JavaScript, Node JS, MongoDB and React JS. Made multiple miniproject and gained a good knowledge and overall understanding how things work in IT.
                                </p>
                            </Col>
                        </Row>
                    </div>

                </div>
            </Container>
        </>
    )
}

export default Experience