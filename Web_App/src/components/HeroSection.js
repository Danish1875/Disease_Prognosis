import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import Fade from 'react-reveal/Fade';
import Typewriter from "typewriter-effect";

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='videos/video-6.mp4' autoPlay loop muted />
        <Fade bottom>
        <h1>Get Checked Up</h1>
        </Fade>
        <div className='hero-container-typed'>
        <Typewriter
         onInit={(typewriter)=> {
           
           typewriter
           .typeString("Prioritize your health")
           .pauseFor(1000)
           .deleteAll()
           .typeString("A little self-care today can keep the doctors away")
           .pauseFor(1000)
           .start()
          }}
          />
          </div>

        <Fade big>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'>Get Started
            </Button> 

            <Button className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large' href='https://youtu.be/6ajmuRg2o3Q'>Feel Good <i className='far fa-play-circle' />
            </Button> 
        </div>
        </Fade>
    </div>
  )
}

export default HeroSection