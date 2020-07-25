import React from 'react'
import classes from '../css/Header.module.css'
import logo from '../images/logo.png'
import useWebAnimaitons from '@wellyshen/use-web-animations'

const Header = () => {
    const {ref, getAnimation } = useWebAnimaitons({
        keyframes:[
            {transform:'translateX(0%)'},
            {transform:'translateX(100%)'},
            {transform:'translateX(0%)'},
        ],
        timing:{
            duration:1500,
            easing:'ease-in-out',
            iterations:Infinity
        },
        autoPlay:false
    })

    const play=()=>{
        getAnimation().play()
    }

    const stop=()=>{
        getAnimation().pause()
    }
    return (
        <nav className={classes.nav}>
            <div className={classes.innerNav}>
                <div className={classes.logo}> <img alt='logo' src={logo}/></div>
                <div className={classes.menu}>
                    <ul>
                        <li className={classes.active}><a  href='./' >Home</a></li>
                        <li><a href='./'>About Us</a></li>
                        <li><a href='./'>Blog</a></li>
                        <li><a href='./'>Services</a> <i className="fa fa-caret-down" aria-hidden="true"></i></li>
                        <li onMouseEnter={()=>{play()}} onMouseLeave={()=>{stop()}} className={classes.getStarted} ><a href='./' >Get Started <i ref={ref} className="fa fa-arrow-right" aria-hidden="true"></i></a>  </li>
                    </ul>
                </div>

            </div>

        </nav>
    )
}

export default Header
