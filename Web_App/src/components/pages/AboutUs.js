import React from 'react'
import '../../App.css'
import './AboutUs.css'
import Fade from 'react-reveal/Fade';
import { Zoom } from 'react-reveal';
import Typed from "react-typed"


export default function AboutUs() {
    return (
        <div className='about_us_page'>
            <Fade bottom><h1 className='about_us'>Get To Know Us</h1></Fade>
            <div className='about_us_content'>
                <Fade>

                    <p>
                        Our web application aims to provide an accurate and timely prediction of various
                        diseases based on the symptoms provided by the user. We utilize machine learning algorithms to
                        analyze the input symptoms and compare them with a dataset containing information on various diseases and their corresponding
                        symptoms.
                    </p>
                    <p>
                        Our team have used machine learning and data science
                        and have committed tirelessly to ensure that our application is
                        reliable, efficient, and user-friendly. We believe that early detection of
                        diseases can significantly increase the survival rate of patients, and
                        we strive to provide our users with a valuable tool to help them monitor their health and
                        seek medical attention when necessary.
                    </p>
                </Fade>
            </div>
            <div className='spacer layer1 flip'></div>
            <div className='services_container'>
                <Fade bottom><h2 className='services_title'>Our Services</h2></Fade>
                <div className='services_cards_container'>
                    <Zoom>
                        <div className='service_card'>
                            <h3>Specialist Guidance</h3>
                            <p>Our users have access to a team of highly qualified doctors who can provide professional medical advice and guidance. Our doctors are available 24/7 to answer your questions and provide you with the support you need.</p>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className='service_card'>
                            <h3>Accessible Facilities</h3>
                            <p>We help our users find nearby clinics that offer the medical services they need. This saves them the trouble of having to travel long distances to access medical care.</p>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className='service_card'>
                            <h3>Tailored Diagnosis</h3>
                            <p>We have a unique feature that allows our users to seek medical attention for free based on the symptoms they are experiencing. Our system uses advanced algorithms to match the symptoms with possible diseases and recommend appropriate treatment.</p>
                        </div>
                    </Zoom>
                </div>
            </div>
            <div className='spacer layer1'></div>
            <div className='quotation_container'>
                <div className='quotation_content'>
                    {/* <div className='svg_container'>

                    <svg id="visual" viewBox="0 0 960 300" width="960" height="300" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                        <g transform="translate(481.6114095692663 173.5653584934434)"><path id='blob1' d="M77.1 -83C96.3 -58 105.7 -29 103.3 -2.4C100.9 24.3 86.9 48.6 67.7 62.1C48.6 75.6 24.3 78.3 1.5 76.7C-21.2 75.2 -42.4 69.4 -64.3 55.9C-86.1 42.4 -108.5 21.2 -106.8 1.8C-105 -17.7 -79 -35.4 -57.2 -60.4C-35.4 -85.4 -17.7 -117.7 5.7 -123.3C29 -129 58 -108 77.1 -83" fill="#e1ceb9"></path></g>

                        <g transform="translate(466.00815878596853 136.43707666138357)" style="visibility: hidden"><path id='blob2' d="M76.5 -70.8C97.8 -55.2 112.9 -27.6 108 -4.9C103 17.7 78 35.4 56.7 60.4C35.4 85.4 17.7 117.7 -0.8 118.5C-19.3 119.3 -38.7 88.7 -51.7 63.7C-64.7 38.7 -71.3 19.3 -76.4 -5.1C-81.5 -29.5 -84.9 -58.9 -71.9 -74.6C-58.9 -90.3 -29.5 -92.1 -0.9 -91.2C27.6 -90.2 55.2 -86.5 76.5 -70.8" fill="#e1ceb9"></path></g>
                        </svg>
                        </div> */}
                    <div className='quotation_text'>
                        <Typed
                            strings={[
                                "Don't wait for symptoms to appear before taking care of your health. Prevention is always better than cure. Regular check-ups can help detect health problems early on, when they are most treatable. As Benjamin Franklin once said, 'An ounce of prevention is worth a pound of cure.' So, don't wait until it's too late. Get a check-up sooner rather than later and take charge of your health ~Dr. Joseph Lister"
                            ]}
                            typeSpeed={50}
                            fadeOut
                            loop
                            />
                    </div>
                </div>
            </div>
            <div className='spacer layer1 flip'></div>
            <div className='pillars_container'>
                <Fade bottom><h2 className='pillars_title'>Our Pillars</h2></Fade>
                <div className='pillars_cards_container'>
                    <Zoom>

                        <div className='pillars_card'>
                            <h3>Reliability</h3>
                            <p>We believe that healthcare should be reliable and accessible to everyone. That's why we have a team of expert doctors who are available 24/7 to provide professional medical advice and guidance.</p>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className='pillars_card'>
                            <h3>Accessibility</h3>
                            <p>We understand that not everyone has access to quality healthcare services, and we are committed to changing that. Our website is designed to provide users with easy access to medical care regardless of their location.</p>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className='pillars_card'>
                            <h3>Innovation</h3>
                            <p>We are dedicated to using the latest technology to make healthcare more efficient and accessible. Our automated services use machine learning to predict the risk of developing certain diseases and recommend appropriate treatment.</p>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className='pillars_card'>
                            <h3>Empathy</h3>
                            <p>We understand that dealing with a disease can be a challenging experience. That's why we provide our users with the emotional support they need to navigate through difficult times.</p>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className='pillars_card'>
                            <h3>Transparency</h3>
                            <p>We believe in being transparent with our users about our services and the information we collect. We are committed to protecting the privacy of our users and ensuring that they have full control over their data.</p>
                        </div>
                    </Zoom>
                </div>
            </div>
            <div className='spacer layer2'></div>
        </div>
    );
}