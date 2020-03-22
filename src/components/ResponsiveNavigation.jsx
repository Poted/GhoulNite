import React, { useState } from 'react';
import toolbar from '../assets/scss/toolbar.scss';
import { Link } from '@reach/router';

function ResponsiveNavigation ({ navLinks, background, hoverBackground, linkColor, logo }) {
     const [ hoverIndex, setHoverIndex ] = useState(-1)
    // const [ navOpen, setNavOpen ] = useState(false) 
    console.log(navLinks, hoverBackground, linkColor, logo)


    return (
        <nav 
            className="responsive-toolbar" 
           // style={{ background }}>
        >
            <ul style={{ background }}> 
                {navLinks.map((link, index) =>
                    <li 
                        onMouseEnter={ () => setHoverIndex(index)}
                        onMouseLeave={ () => setHoverIndex(- 1)}
                        style={{ background: hoverIndex === index ? ( hoverBackground || '#999') : '' }}
                    >
                        <Link
                            to={link.path}
                            style={{ color: linkColor }}
                        >
                            { link.text }
                            <i className={link.icon} />
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default ResponsiveNavigation