import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { useState } from 'react';
import PortfolioCardComp from './PortfolioCardComp';
import { data } from '../projectData';
import { useEffect } from 'react';
import ProjectDescriptionModal from './ProjectDescriptionModal';

const Portfolio = () => {
    const [show, setShow] = useState(false);
    const [projectDetailsForModal, setProjectDetailsForModal] = useState({});
    const closeProjectDetailsModalHandler = () => setShow(false);
    const showProjectDetailsModalHandler = () => setShow(true);

    const [projectsForActiveTab, setProjectsForActiveTab] = useState([]);
    const [active, setActive] = useState({
        activeTab: 'all',
        isActive: '',
    });

    useEffect(() => {
        setProjectsForActiveTab(data);
    }, [])

    const setActiveTab = (activeProjectType) => {
        // Below I am setting the active tab clicked by user
        setActive({
            activeTab: activeProjectType,
        })

        // Below if will work and show all the projects if user clicks on all tab
        if (activeProjectType === 'all') {
            return setProjectsForActiveTab(data);
        }


        // Below will only work when user selects a particular tab like frontend or full stack project tab
        const projectsForActiveTab = data.filter((proj) => {
            return proj.projectType === activeProjectType
        })

        setProjectsForActiveTab(projectsForActiveTab);
    }

    console.log('active', active);
    console.log('projectsForActiveTab', projectsForActiveTab);
    console.log('projectDetailsForModal', projectDetailsForModal);
    return (
        <>
            <Container className="portfolio-container" id="portfolio">
                <div>
                    <h2 className='portfolio-title common-title-style'>
                        MY PORTFOLIO
                        <div className='line'></div>
                    </h2>
                </div>
                <Row className='justify-content-center'>
                    <Col className='mt-4' lg={12}>
                        <div className='tabs-links-div'>
                            <ul>
                                <li className={active.activeTab === 'all' ? 'active' : ''} onClick={() => setActiveTab('all')}>All</li>
                                <li className={active.activeTab === 'front' ? 'active' : ''} onClick={() => setActiveTab('front')}>Front End</li>
                                <li className={active.activeTab === 'full' ? 'active' : ''} onClick={() => setActiveTab('full')}>Full Stack</li>
                            </ul>
                        </div>
                    </Col>
                    <PortfolioCardComp projectsForActiveTab={projectsForActiveTab}
                        showProjectDetailsModalHandler={showProjectDetailsModalHandler}
                        setProjectDetailsForModal={setProjectDetailsForModal}
                    />

                    {/* Below is Portfolio Details Modal */}
                    {/* <Col lg={12}>
                        <Modal
                            show={show}
                            onHide={closeProjectDetailsModalHandler}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Modal title</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                I will not close if you click outside me. Don't even try to press
                                escape key.
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={closeProjectDetailsModalHandler}>
                                    Close
                                </Button>
                                <Button variant="primary">Understood</Button>
                            </Modal.Footer>
                        </Modal>
                    </Col> */}


                    <Modal
                        show={show}
                        onHide={closeProjectDetailsModalHandler}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton className='project-details-modal-header'>
                            <Modal.Title>{projectDetailsForModal?.projectName}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='project-details-modal-body'>
                            <p className='m-0'><b>FEATURES - </b></p>
                            <ul>
                                {
                                    Object.keys(projectDetailsForModal).length && projectDetailsForModal?.projectDesc.split(".").map((el) => {
                                        return (
                                            <li>{el}</li>
                                        )
                                    })
                                }
                            </ul>
                        </Modal.Body>
                        <Modal.Footer className='project-details-modal-footer'>
                            <a href={projectDetailsForModal?.githubLink} target="_blank" className='download-cv-btn border-0 me-4' onClick={closeProjectDetailsModalHandler}>
                                Github Link
                            </a>
                            <a href={projectDetailsForModal?.projectLink} target="_blank" className='download-cv-btn border-0'>Project Link</a>
                        </Modal.Footer>
                    </Modal>
                </Row>
            </Container>

        </>
    )
}

export default Portfolio