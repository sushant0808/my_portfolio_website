import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { data } from '../projectData'

const PortfolioCardComp = ({ projectsForActiveTab, showProjectDetailsModalHandler, setProjectDetailsForModal }) => {


    const viewProjectDetailsHandler = (projData) => {
        showProjectDetailsModalHandler();
        setProjectDetailsForModal(projData);
    }

    return (
        <>
            {
                projectsForActiveTab.map((projData, index) => {
                    return (
                        <Col className='portfolio-col' md={6} lg={4} key={index}>
                            <Card className='portfolio-card'>
                                <Card.Img src={projData.projectImage} className='img-fluid' />
                                <Card.Body style={{ padding: '20px 20px 0 20px' }}>
                                    {console.log(projData.projectName, projData.projectDesc.length)}
                                    <Card.Title>{projData.projectName}</Card.Title>
                                    <Card.Text>
                                        {`${projData.projectDesc.slice(0, 100)}.......`}
                                    </Card.Text>
                                    <button className='download-cv-btn border-0' onClick={() => viewProjectDetailsHandler(projData)}>View Project</button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
            }
        </>
    )
}

export default PortfolioCardComp