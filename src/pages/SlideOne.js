import React from 'react'
import slide1 from '../assets/desktop-image-hero-1.jpg'
import rightarr from '../assets/icon-angle-right.svg'
import leftarr from '../assets/icon-angle-left.svg'
import arr from '../assets/icon-arrow.svg'
import bottomimg from '../assets/image-about-dark.jpg'
import lbottomimg from '../assets/image-about-light.jpg'
import './SlideOne.css'

function SlideOne() {
  return (
    <div className='all-container'>
        <div className='container'>
            <div className='img-container'>
                <img src={slide1} alt='slideone' className='slide-1'/>
                <nav className='navbar'>
                    <div>
                        <p><span>room</span> home shop About Contact</p>
                    </div>
                    {/* <div className='arrow-div'>
                    <img src={leftarr} alt="left arrow"/>
                    <img src={rightarr} alt="right arrow"/>
                    </div> */}
                </nav>
            </div>
            <div className='text-div'>
                <div>
                    <h2>Discover innovate ways to decorate</h2>
                    <p>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. create a room in your own style with our collection and make your property a reflection of you and what you love </p>
                    <h6 className='text-space'>SHOP NOW <img src={arr} alt= "arrow"/> </h6>
                </div>
            </div>
        </div>
        <div className='bottom-flex'>
            <img src ={bottomimg} alt="but-img"  className='bottom-left-img'/>
            <div>
                <h3>ABOUT OUR FURNITURE</h3>
                <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything between. Product specialists are available to help create your dream space</p>
            </div>
            <img src ={lbottomimg} alt="but-img"  className='bottom-right-img'/>
        </div>
    </div>
    
  )
}

export default SlideOne;
