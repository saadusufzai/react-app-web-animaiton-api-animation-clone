import React from 'react'
import classes from '../css/Header.module.css'
import logo from '../images/logo.png'

const Header = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.innerNav}>
                <div className={classes.logo}> <img src={logo}/></div>
                <div className={classes.menu}>
                    <ul>
                        <li className={classes.active}><a  href='#' >Home</a></li>
                        <li><a href='#'>About Us</a></li>
                        <li><a href='#'>Blog</a></li>
                        <li><a href='#'>Services</a></li>
                        <li className={classes.getStarted} ><a href='#' >Get Started</a></li>
                    </ul>
                </div>

            </div>

        </nav>
    )
}

export default Header
