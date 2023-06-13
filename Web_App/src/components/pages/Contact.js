import React from 'react'
import '../../App.css'
import './Contact.css'
import Map from '../Map'
import Fade from 'react-reveal/Fade';
import { Zoom } from 'react-reveal';

export default function Contact() {
    return (
        <div>
            <div className='spacer3 layer3'>

                <div className='contact_container'>
                    <Fade bottom><h1 className='contact_us'>Contact Us</h1></Fade>
                    <div className='contact_us_content'>
                        <Fade>
                            <p>We are always happy to hear from our users.
                                Please feel free to contact us for any feedback
                                or queries you may have. Our team is committed to providing the best
                                possible service and support to our users.
                                Whether you have questions about the disease
                                prediction system or need help navigating the
                                web application, our customer service representatives
                                are available to assist you. We also welcome any
                                feedback you may have regarding the system's accuracy or features.
                                Your input helps us improve the system and provide a
                                better user experience. Please don't hesitate
                                to reach out to us via email or phone.
                                We look forward to hearing from you!</p>
                        </Fade>
                        <Fade>
                            <b>Our office is located at:</b>
                            <b>123 Main Street</b>
                            <b>City, State 12345</b>
                            <b>Email: contact@ourwebsite.com</b>
                            <b>Phone: 555-123-4567</b>
                        </Fade>
                        <Zoom>
                            <div className="map-contact-container">
                                <Map />
                            </div>
                        </Zoom>
                    </div>
                </div>
            </div>
        </div>
    );
}
