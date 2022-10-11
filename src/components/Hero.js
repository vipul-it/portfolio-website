import './Hero.css'
import IntroImg from '../assets/intro-bg.jpg'
import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img src={IntroImg} alt="IntroImg" className="into-img" />
        </div>
        <div className="content">
            <p>HI, I'M VIPUL</p>
            <h1>React JS Developer.</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Hero