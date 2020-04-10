import React, { useState } from 'react';
import { Link } from '@reach/router';
import Home from '../pages/Home';


function ResponsiveNavigation ({ navLinks, background, hoverBackground, linkColor, logo }) {
     const [ hoverIndex, setHoverIndex ] = useState(-1)
     const [ navOpen, setNavOpen ] = useState(false) 
    console.log()





    return (
        <nav className="responsive-toolbar">
            <ul 
                style={ background }
                className={ navOpen ? 'active' : ''}> 
                
                <figure onClick={ () => setNavOpen(!navOpen) }>
                    <img src={logo} alt="logo-nav-togger"/>
                </figure>

                {navLinks.map((link, index) =>
                    <li 
                        onMouseEnter={ () => setHoverIndex(index)}
                        onMouseLeave={ () => setHoverIndex(- 1)}
                        style={{ background: hoverIndex === index ? ( hoverBackground || '#666') : '' }}
                    >
                        <Link
                            to={link.path}
                            style={{ color: linkColor }}>

                            { link.text }
                            <i className={link.icon} /> 
                        
                        </Link>

                    </li>
                )}

                <div className="userProfileBtn">
                    <Link to="/user-profile">
                        <img src={require("../assets/jarek.png")}/>
                        <a>Your Profile</a>
                    </Link>
                </div>

                <Home/>

            </ul>

        </nav>
    )
}

export default ResponsiveNavigation