import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsMap } from 'react-icons/bs';
import { RxEnvelopeClosed } from 'react-icons/rx'
import { BsPhone } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';

const Contact = () => {
    const [contactFormDetails, setContactFormDetails] = useState({
        usersName: '',
        usersEmail: '',
        usersSubject: '',
        usersMessage: '',
    });
    const form = useRef();
    function sendEmail(e) {

        // Removing all red borders before applying the new ones for current errors
        Object.keys(contactFormDetails).map((key) => {
            document.querySelector(`[name=${key}]`).style.border = '1px solid rgba(255, 255, 255, 0.3)';
        })

        let errorCount = 0;
        e.preventDefault();

        // Below we are adding red border to indicate error for empty input field
        Object.entries(contactFormDetails).map(([key, value]) => {
            console.log('jhandu onli', key, value);
            if (value === '') {
                errorCount = errorCount + 1;
                console.log('el', document.querySelector(`[name=${key}]`));
                document.querySelector(`[name=${key}]`).style.border = '1px solid red';
            }
        })

        console.log('errorCount', errorCount);

        if (errorCount > 0) return
        console.log('called');

        emailjs.sendForm("service_ewlhpov", "template_lf3t77s", form.current, "U9PdBenmPNPiIBAOj")
            .then((res) => {
                console.log(res.text);
                console.log('message sent');
            }, (err) => {
                console.log(err.text);
            })

        setContactFormDetails({
            usersName: '',
            usersEmail: '',
            usersSubject: '',
            usersMessage: '',
        });
    }

    return (
        <>
            {/* <section> */}

            <Container className='contact-container' id="contact">
                <div>
                    <h2 className='contact-title common-title-style'>
                        GET IN TOUCH
                        <div className='line'></div>
                    </h2>
                </div>
                <Row className='mt-5'>
                    <Col lg={5} className='contact-cols'>
                        <div className='contact-info-div'>
                            <h3 className='contact-subtitle'>What’s your story? Get in touch</h3>
                            <p className='contact-desc'>Always available for freelancing if the right project comes along, Feel free to contact me.</p>
                            <ul className='contact-details'>
                                <li>
                                    <BsMap className='contact-icons' />
                                    <span className='contact-info'>4/125, Vijay Nagar, Bandra-East, Mumbai-51</span>
                                </li>
                                <li className=''>
                                    <RxEnvelopeClosed className='contact-icons' />
                                    <span className='contact-info'>sushant@gmail.com</span>
                                </li>
                                <li className=''>
                                    <BsPhone className='contact-icons' />
                                    <span className='contact-info'>9820469283</span>
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col lg={7} className='contact-cols mt-xs-5 mt-lg-0 contact-second-col'>
                        <div className='contact-form'>
                            <h4 className='mb-4' style={{ color: 'white' }}>Say Something</h4>
                            <form ref={form} onSubmit={sendEmail}>
                                <Row>
                                    <Col lg={6}>
                                        <input className='form-control mb-3 contact-form-inputs' name="usersName" type="text" placeholder='Name*' value={contactFormDetails.usersName}
                                            onChange={(e) => setContactFormDetails({ ...contactFormDetails, usersName: e.target.value })}
                                        />
                                    </Col>
                                    <Col lg={6}>
                                        <input className='form-control mb-3 contact-form-inputs' name="usersEmail" type="text" placeholder='Email*'
                                            value={contactFormDetails.usersEmail} onChange={(e) => setContactFormDetails({ ...contactFormDetails, usersEmail: e.target.value })}
                                        />
                                    </Col>
                                    <Col lg={12}>
                                        <input className='form-control mb-3 contact-form-inputs' name="usersSubject" type="text" placeholder='Subject*'
                                            value={contactFormDetails.usersSubject} onChange={(e) => setContactFormDetails({ ...contactFormDetails, usersSubject: e.target.value })}
                                        />
                                    </Col>
                                    <Col lg={12}>
                                        <textarea rows='4' className='form-control mb-3 contact-form-inputs' name="usersMessage" type="text" placeholder='Your message*'
                                            value={contactFormDetails.usersMessage} onChange={(e) => setContactFormDetails({ ...contactFormDetails, usersMessage: e.target.value })}
                                        ></textarea>
                                    </Col>
                                    <Col lg={12}>
                                        <button type='submit' className='download-cv-btn'>Send Message</button>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* </section> */}
        </>
    )
}

export default Contact