import React, { useEffect, useCallback, useRef } from 'react';
import $ from 'jquery';
import {NavLink} from 'react-router-dom'



const Navbar = React.memo((props)=> {
    const mobMenuButton = useRef(), navMenu=useRef();
    const stickyElement=useCallback(()=> {
        try {
            var header = document.querySelector('.weareauki__container');
            var headerHeight = getComputedStyle(header).height.split('px')[0];
            var navbar = document.querySelector('.navbar');  
            var scrollValue = window.scrollY;
            
            if (scrollValue > headerHeight){
            //   
              navbar.classList.add('is-fixed');
            //   const timer= setTimeout(()=> {
            //     navbar.classList.add('up');
            //     navbar.style.transform = "translateY(0%)";
            //     clearTimeout(timer);
            //   },10)
              
            } else if (scrollValue < headerHeight){
            //   navbar.classList.remove('up');
              navbar.classList.remove('is-fixed');
            //   navbar.removeAttribute("style");
              
            }
        }
        catch(err) {

        }
      
    },[]);
    
    useEffect(() => {
        window.addEventListener('scroll', stickyElement);
    },[stickyElement]);

    

    const menuBtnClick = useCallback(()=> {
        $(mobMenuButton.current).toggleClass("open");
        $(navMenu.current).slideToggle();
    },[]);
        return (
            <nav className="navbar">
                <div className="navbar-brand">
                    <div className="navbar-logo">
                        <img className="navbar-logoImg" src="./assets/auki.png" alt="auki" />
                        <h4 className="navbar-auki">AUKI</h4>
                    </div>
                    <h4 className="navbar-pioneer">Pioneering Experience</h4>
                </div>
                <div className="navbar-menu" ref={navMenu}>
                    <ul className="navbar-list">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">service</NavLink> </li>
                        <li><NavLink to="/about-us">about us</NavLink></li>
                        <li><NavLink to="/partner-prg">partner program</NavLink></li>
                    </ul>
                </div>
                <div className="menu btn1" data-menu="1" onClick={menuBtnClick} ref={mobMenuButton}>
                        <div className="icon-left"></div>
                        <div className="icon-right"></div>
                </div>
            </nav>
          );
});
 
export default Navbar;