import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './navbar.css'

import burgerMenu from '../images/burgerMenuGold.png'
import closeBtn from '../images/closeGold.png'
import logoWhite from '../images/glogo-Photoroom.png' 
import logoblack from '../images/glogo-Photoroom.png' 

export default function Navbar(props){
    const [hamburgerMenu, setHamburgerMenu] = useState(`${props.firstLoad ? props.firstLoad : burgerMenu }`) //hambugerMenu icon
    const [navbar, setNavbar] = useState('navbar')
    const [navLine, setNavLine] = useState('navLine')
    const [logoP, setLogoP] = useState(logoWhite)
    const [menuColor, setMenuColor] = useState('navMenuLinks')
    const [menuIcon, setMenuIcon] = useState('burgerMenuIcon') //hambugerMenu class
    const [dashboard, setDashboard] = useState('dashboard')

    const navLinkClass = props.navLinkColor
        ? props.navLinkColor.replace(/\bblack\b/g, '').trim() || 'navMenuLinks'
        : 'navMenuLinks'

    useEffect(()=>{
        document.body.classList.remove('overflowHidden');
    },[])

    const handleButtonClick = () => {
        window.location.href = `tel:786 531 0916`;
      };

    const burgerHandler = ()=> {
        setMenuIcon('burgerMenuIconDeactive')
        setDashboard('dashboard dashboardActive') 
        document.body.classList.add('overflowHidden'); 
    }

    const closeHandler = ()=> {
        setMenuIcon('burgerMenuIcon')
        setDashboard('dashboard')
        document.body.classList.remove('overflowHidden'); 
    }

    
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if (window.scrollY > 100) {
                setNavbar('navbar whiteBG')
                setMenuColor("navMenuLinks")
                setLogoP(logoblack)
                setNavLine('navLine navLineZero')
                if (window.innerWidth < 769) {
                    setHamburgerMenu(props.burgerBlack)
                  }
                  
              }
    
            if(window.scrollY < 50){
                setNavbar('navbar')
                setMenuColor("navMenuLinks")
                setLogoP(logoWhite)
                setNavLine('navLine')
                if (window.innerWidth < 769) {
                    setHamburgerMenu(props.burgerWhite)
                  }
            }
    
        });
    }, [props.burgerWhite, props.burgerBlack])

    return(
            <nav className={props.bg ? props.bg : navbar}>
                <div className='navbar_inner'>
                    <Link to='/'>
                        <div className='logo'>
                            <img src={props.logoColor ? props.logoColor : logoP} alt='logo for Namour Massage spa'/>
                        </div>
                    </Link>

                    <div className='menu'>
                        <Link to='/' className={navLinkClass}>home</Link>
                        {/* <Link to='/' className={navLinkClass}>about</Link> */}
                        <Link to='/services' className={navLinkClass}>services</Link>
                        <p className={navLinkClass} onClick={handleButtonClick}>Call</p>
                    </div>

                    <div className='burgerMenu' onClick={burgerHandler}>
                        <img className={menuIcon} src={hamburgerMenu} alt='burger menu open icon'/>
                    </div>

                    <div className={navLine} />
                </div>

                <div className={dashboard}>
                    <div className='closeIconDiv'>
                        <div className='dashboardLogo'><p>Namour Massage</p></div>
                        <img className='closeIcon' src={closeBtn} alt='burger menu close icon' onClick={closeHandler}/>
                    </div>


                    <div className='dashboardMenu'>
                        <Link to='/' className='dashboardLinks'>home</Link>
                        {/* <Link to='/' className='dashboardLinks'>about</Link> */}
                        <Link to='/services' className='dashboardLinks'>services</Link>
                        <p className='dashboardLinks' onClick={handleButtonClick}>Call</p>
                    </div>

                    <div className="workingHoursNavbar">
                            <h2>Working Hours</h2>
                            <p>Monday - Sunday</p>
                            <p>6AM - Midnight</p>
                        </div>

                        <div className="contactUsNavbar">
                            <h2>Contact</h2>
                            <p onClick={handleButtonClick}>T: 786 531 0916</p>
                            <p className='navContactEmal'>Namourmassage@gmail.com</p>
                        </div>
                </div>
            </nav>
    )
}