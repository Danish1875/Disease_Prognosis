import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']



export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    href
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    
    if (href) {
        return (
          <a href={href} className='btn-mobile' target='_blank' rel='noopener noreferrer'>
            <button
              className={`btn ${checkButtonStyle} ${checkButtonSize}`}
              type={type}
            >
              {children}
            </button>
          </a>
        )
      }

    return (
        <Link to='/login' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                
                {children}
            </button>
        </Link>
    )
};