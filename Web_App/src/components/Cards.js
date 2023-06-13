import React from 'react'
import './Cards.css'
import CardItem from './CardItem'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function Cards() {
    return (
        <div className='cards'>
            <Fade bottom>
                <h1>Revitalize Your Life: Embrace the Power of Health and Unleash Your True Potential</h1>
            </Fade>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <Zoom>
                            <CardItem
                                src="images/img-9.png"
                                text="Predicting diseases can help detect and treat them early, potentially saving lives."
                                label='Trust'
                                path='/about us'
                            />
                        </Zoom>
                        <Zoom>
                            <CardItem
                                src="images/img-2.png"
                                text="Predictive analytics can help healthcare providers improve the quality of care."
                                label='Commitment'
                                path='/about us'
                            />
                        </Zoom>
                    </ul>

                    <ul className='cards__items'>
                        <Zoom>
                            <CardItem
                                src="images/W.H.O.png"
                                text="By predicting disease progression, healthcare providers can make more informed decisions about when to intervene and how to manage patients, leading to better outcomes."
                                label='Faith'
                                path='/about us'
                            />
                        </Zoom>
                        <Zoom>
                            <CardItem
                                src="images/img-4.png"
                                text="Predictive analytics can help identify new disease trends and patterns, leading to the development of new treatments and cures."
                                label='Assurance'
                                path='/about us'
                            />
                        </Zoom>
                        <Zoom>
                            <CardItem
                                src="images/img-5.png"
                                text="Predicting disease outbreaks can help public health officials take proactive measures to prevent the spread of disease, protecting public health."
                                label='Certainty'
                                path='/about us'
                            />
                        </Zoom>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;