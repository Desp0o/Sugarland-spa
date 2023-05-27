import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './navbar.css'

import burgerMenu from '../images/burgerMenu.webp'
// import burgerMenu from '../images/burgerMenu.png'
import closeBtn from '../images/close.webp'
import logoWhite from '../images/logoWhite.png' 
import logoblack from '../images/logoblack.png' 

export default function Navbar(props){
    const [hamburgerMenu, setHamburgerMenu] = useState(`${props.firstLoad ? props.firstLoad : burgerMenu }`) //hambugerMenu icon
    const [navbar, setNavbar] = useState('navbar')
    const [navLine, setNavLine] = useState('navLine')
    const [logoP, setLogoP] = useState('logoP')
    const [menuColor, setMenuColor] = useState('navMenuLinks')
    const [menuIcon, setMenuIcon] = useState('burgerMenuIcon') //hambugerMenu class
    const [dashboard, setDashboard] = useState('dashboard')

    const burgerHandler = ()=> {
        setMenuIcon('burgerMenuIconDeactive')
        setDashboard('dashboard dashboardActive') 
    }

    const closeHandler = ()=> {
        setMenuIcon('burgerMenuIcon')
        setDashboard('dashboard')
    }

    
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if (window.scrollY > 100) {
                setNavbar('navbar whiteBG')
                setMenuColor("navMenuLinks black")
                setLogoP('logoP black')
                setNavLine('navLine navLineZero')
                if (window.innerWidth < 769) {
                    setHamburgerMenu(props.burgerBlack)
                  }
                  
              }
    
            if(window.scrollY < 50){
                setNavbar('navbar')
                setMenuColor("navMenuLinks")
                setLogoP('logoP')
                setNavLine('navLine')
                if (window.innerWidth < 769) {
                    setHamburgerMenu(props.burgerWhite)
                  }
            }
    
        });
    }, [])

    return(
        <>
            <div className={props.bg ? props.bg : navbar}>
                <Link to='/'>
                    <div className='logo'>
                        {/* <p className={props.logoColor ? props.logoColor : logoP}>Sugarland Spa</p> */}
                        <img src={logoblack} />
                    </div>
                </Link>

                <div className='menu'>
                    <Link to='/' className={props.navLinkColor ? props.navLinkColor : menuColor}>home</Link>
                    <Link to='/' className={props.navLinkColor ? props.navLinkColor : menuColor}>about</Link>
                    <Link to='/pages/services/services' className={props.navLinkColor ? props.navLinkColor : menuColor}>services</Link>
                    <Link to='/' className={props.navLinkColor ? props.navLinkColor : menuColor}>contact</Link>
                </div>

                <div className='burgerMenu' onClick={burgerHandler}>
                    <img className={menuIcon} src={hamburgerMenu} alt='burger menu open icon'/>
                </div>

                <div className={navLine} />
            </div>

            <div className={dashboard}>
                <div className='closeIconDiv'>
                    <div className='dashboardLogo'><p>Sugarland Spa</p></div>
                    <img className='closeIcon' src={closeBtn} alt='burger menu close icon' onClick={closeHandler}/>
                </div>


                <div className='dashboardMenu'>
                    <Link to='/' className='dashboardLinks'>home</Link>
                    <Link to='/' className='dashboardLinks'>about</Link>
                    <Link to='/pages/services/services' className='dashboardLinks'>services</Link>
                    <Link to='/' className='dashboardLinks'>contact</Link>
                </div>

                <div className="workingHoursNavbar">
                        <h3>Working Hours</h3>
                        <p>Monday - Sunday</p>
                        <p>6AM - Midnight</p>
                    </div>

                    <div className="contactUsNavbar">
                        <h3>Contact</h3>
                        <p>T:</p>
                        <p>Email:</p>
                    </div>
            </div>
        </>
    )
}