import React from 'react';
import { Link } from 'react-router-dom';
import { REGISTRY_LINK } from '../../App';
import { navbarStyle, navLiStyle, navLinkStyle, navVisibility } from '../../styles/Navbar.styles';

const Navbar = () => {
    return (
        <nav className={navVisibility}>
            <ul className={navbarStyle}>
                <li className={navLiStyle}><Link className={navLinkStyle} to="/">Home</Link></li>
                <li className={navLiStyle}><Link className={navLinkStyle} to="/weddingdetails">Wedding Details</Link></li>
                <li className={navLiStyle}><Link className={navLinkStyle} to="/aboutus">About Us</Link></li>
                <li className={navLiStyle}><Link className={navLinkStyle} to={{ pathname: REGISTRY_LINK}} target='_blank'>Registry <i className="fa fa-external-link" aria-hidden="true" /></Link></li>
                <li className={navLiStyle}><Link className={navLinkStyle} to="/songrequests">Song Requests</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;