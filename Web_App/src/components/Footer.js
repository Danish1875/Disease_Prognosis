import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Subscribe To Improve our Facility
            </p>

            <p className='footer-subscription-text'>
                You Can Unsubscribe at any time
            </p>
            <div className='input-areas'>
                <form>
                    <input type='email' name="email" placeholder='Your Email' className='footer-input'/>
                    <div className="btn-container-sub">
                        <Button buttonStyle='btn-outline'>SUBSCRIBE</Button>
                    </div>
                </form>
            </div>
        </section>

        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/about us'>How It Works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Queries</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/'>Support</Link>
                    <Link to='/'>Doctors</Link>
                    <Link to='/'>Investors</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Videos</h2>
                    <Link to='/'>Submit Video</Link>
                    <Link to='/'>Ambassadors</Link>
                    <Link to='/'>Agency</Link>
                    <Link to='/'>Influencer</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Social Media</h2>
                    <Link to='https://www.instagram.com'>Instagram</Link>
                    <Link to='https://www.facebook.com/'>Facebook</Link>
                    <Link to='https://www.youtube.com/'>Youtube</Link>
                    <Link to='https://twitter.com/?lang=en-in'>Twitter</Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                        DP <i className='fab fa-typo3'></i>
                    </Link>
                </div>
                <small className='website-rights'>
                    DP ~ 2023
                </small>
                <div className='social-icons'>
                    <Link className='social-icon-link facebook'
                    to="/" target="_blank" aria-label='Facebook'
                    >
                        <i className='fab fa-facebook-f'></i>
                    </Link>
                    <Link className='social-icon-link instagram'
                    to="/" target="_blank" aria-label='Instagram'
                    >
                        <i className='fab fa-instagram'></i>
                    </Link>
                    <Link className='social-icon-link youtube'
                    to="/" target="_blank" aria-label='Youtube'
                    >
                        <i className='fab fa-youtube'></i>
                    </Link>
                    <Link className='social-icon-link twitter'
                    to="/" target="_blank" aria-label='Twitter'
                    >
                        <i className='fab fa-twitter'></i>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer