import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './navbar.css'

import burgerMenu from '../images/burgerMenu.webp'
import burgerMenuBlack from '../images/burgerMenuBlack.webp'
import closeBtn from '../images/close.webp'

export default function Navbar(props){
    const [hamburgerMenu, setHamburgerMenu] = useState(burgerMenu) //hambugerMenu icon
    const [navbar, setNavbar] = useState('navbar')
    const [logoP, setLogoP] = useState('logoP')
    const [menuColor, setMenuColor] = useState('navMenuLinks')
    const [menuIcon, setMenuIcon] = useState('burgerMenuIcon') //hambugerMenu class
    const [dashboard, setDashboard] = useState('dashboard')
    const [isOpened, setIsOpened] = useState(false)

    const burgerHandler = ()=> {
        setIsOpened(true)
        setMenuIcon('burgerMenuIconDeactive')
        setDashboard('dashboard dashboardActive') 
    }

    const closeHandler = ()=> {
        setIsOpened(false)
        setMenuIcon('burgerMenuIcon')
        setDashboard('dashboard')
    }

    
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if (window.scrollY > 100) {
                setNavbar('navbar whiteBG')
                setMenuColor("navMenuLinks black")
                setLogoP('logoP black')
    
                if (window.innerWidth < 769) {
                    setHamburgerMenu(burgerMenuBlack)
                  }
                  
              }
    
            if(window.scrollY < 50){
                setNavbar('navbar')
                setMenuColor("navMenuLinks")
                setLogoP('logoP')
    
                if (window.innerWidth < 769) {
                    setHamburgerMenu(burgerMenu)
                  }
            }
    
        });
    }, [])

    return(
        <>
            <div className={props.bg ? props.bg : navbar}>
                <Link to='/'>
                    <div className='logo'><p className={props.logoColor ? props.logoColor : logoP}>Sugarland Spa</p></div>
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

                <div className='navLine' />
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
            </div>
        </>
    )
}