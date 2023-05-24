import React from 'react'
import { Link } from 'react-router-dom'

import './navbar.css'

export default function Navbar(){
    return(
        <>
            <div className='navbar'>
                <div className='logo'></div>

                <div className='menu'>
                    <Link to='/' className='navMenuLinks'>home</Link>
                    <Link to='/' className='navMenuLinks'>about</Link>
                    <Link to='/' className='navMenuLinks'>services</Link>
                    <Link to='/' className='navMenuLinks'>contact</Link>
                </div>
            </div>
        </>
    )
}