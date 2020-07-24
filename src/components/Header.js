import React from 'react'
import classes from '../css/Header.module.css'
import logo from '../images/logo.png'
import fa from 'react-fontawesome'

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
                        <li><a href='#'>Services</a> <i class="fa fa-caret-down" aria-hidden="true"></i></li>
                        <li className={classes.getStarted} ><a href='#' >Get Started <i class="fa fa-arrow-right" aria-hidden="true"></i></a>  </li>
                    </ul>
                </div>

            </div>

        </nav>
    )
}

export default Header
