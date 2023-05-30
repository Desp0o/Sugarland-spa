import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './navbar.css'

import burgerMenu from '../images/burgerMenu.webp'
import closeBtn from '../images/close.webp'
import logoWhite from '../images/logoWhite.webp' 
import logoblack from '../images/logoBlack.webp' 

export default function Navbar(props){
    const [hamburgerMenu, setHamburgerMenu] = useState(`${props.firstLoad ? props.firstLoad : burgerMenu }`) //hambugerMenu icon
    const [navbar, setNavbar] = useState('navbar')
    const [navLine, setNavLine] = useState('navLine')
    const [logoP, setLogoP] = useState(logoWhite)
    const [menuColor, setMenuColor] = useState('navMenuLinks')
    const [menuIcon, setMenuIcon] = useState('burgerMenuIcon') //hambugerMenu class
    const [dashboard, setDashboard] = useState('dashboard')

    useEffect(()=>{
        document.body.classList.remove('overflowHidden');
    },[])

    const handleButtonClick = () => {
        window.location.href = `tel:786 414 4947`;
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
                setMenuColor("navMenuLinks black")
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
    }, [])

    return(
        <>
            <div className={props.bg ? props.bg : navbar}>
                <Link to='/'>
                    <div className='logo'>
                        <img src={props.logoColor ? props.logoColor : logoP} alt='logo for sugarland spa'/>
                    </div>
                </Link>

                <div className='menu'>
                    <Link to='/' className={props.navLinkColor ? props.navLinkColor : menuColor}>home</Link>
                    {/* <Link to='/' className={props.navLinkColor ? props.navLinkColor : menuColor}>about</Link> */}
                    <Link to='/pages/services/services' className={props.navLinkColor ? props.navLinkColor : menuColor}>services</Link>
                    <p className={props.navLinkColor ? props.navLinkColor : menuColor} onClick={handleButtonClick}>Call</p>
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
                    {/* <Link to='/' className='dashboardLinks'>about</Link> */}
                    <Link to='/pages/services/services' className='dashboardLinks'>services</Link>
                    <p className='dashboardLinks' onClick={handleButtonClick}>Call</p>
                </div>

                <div className="workingHoursNavbar">
                        <h2>Working Hours</h2>
                        <p>Monday - Sunday</p>
                        <p>6AM - Midnight</p>
                    </div>

                    <div className="contactUsNavbar">
                        <h2>Contact</h2>
                        <p onClick={handleButtonClick}>T: 786 414 4947</p>
                        <p className='navContactEmal'>info@sugarlandspamassage.com</p>
                    </div>
            </div>
        </>
    )
}