import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { REGISTRY_LINK } from '../../App';
import { navMenuVisibility, linkStyle } from '../../styles/NavMenu.styles';
import { ACCENT_COLOR, PRIMARY_COLOR } from '../../styles/StyleConstants';

const navMenuStyles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '20px',
        top: '20px'
    },
    bmBurgerBars: {
        background: PRIMARY_COLOR
    },
    bmBurgerBarsHover: {
        background: ACCENT_COLOR
    },
    bmCrossButton: {
        height: '32px',
        width: '32px'
    },
    bmCross: {
        background: '#fafafa',
        height: '20px',
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%'
    },
    bmMenu: {
        background: '#212121',
        fontSize: '18px'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#fafafa',
        marginTop: '20px',
        textAlign: 'left',
        height: 'auto'
    },
    bmItem: {
        display: 'block',
        borderBottom: '2px solid #eaeaea',
        padding: '10px 0',
        margin: '5px'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
};

const NavMenu = () => {
    return (
        <div className={navMenuVisibility}>
            <Menu styles={navMenuStyles}>
                <Link className={linkStyle} to="/">Home</Link>
                <Link className={linkStyle} to="/weddingdetails">Wedding Details</Link>
                <Link className={linkStyle} to="/aboutus">About Us</Link>
                <Link className={linkStyle} to={{}} target='_blank'>Registry <i className={`fa fa-external-link ${linkStyle}`} aria-hidden="true" /></Link>
                <Link className={linkStyle} to="/songrequests">Song Requests</Link>
            </Menu>
        </div>
    );
};

export default NavMenu;