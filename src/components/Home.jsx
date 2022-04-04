import React from 'react';
import { Link } from 'react-router-dom';
import { 
    homepageStyle,
    homepageBackgroundStyle,
    homepageOverlayStyle,
    headerStyle,
    infoItemStyle,
    navLinksContainerStyle,
    navLinkDivStyle,
    navLinkStyle,
    mobileBorderStyle,
    rsvpButtonStyle
} from '../styles/Home.styles';

const Home = () => {
    return(
        <div className={homepageStyle}>
            <div className={homepageBackgroundStyle} />
            <div className={homepageOverlayStyle} />

            <h1 className={headerStyle}>*Bride & Groom*</h1>

            <p className={infoItemStyle}>*Date*</p>
            <p className={infoItemStyle}>*Ceremony location/time*</p>
            <p className={infoItemStyle}>*Reception location/time*</p>
            
            <ul className={navLinksContainerStyle}>
                <li className={navLinkDivStyle}><Link className={navLinkStyle} to="/weddingdetails">Wedding Details</Link></li>
                <div className={mobileBorderStyle} />
                <li className={navLinkDivStyle}><Link className={navLinkStyle} to="/aboutus">About Us</Link></li>
                <div className={mobileBorderStyle} />
                <li className={navLinkDivStyle}><Link className={navLinkStyle} to={{}} target='_blank'>Registry</Link></li>
                <div className={mobileBorderStyle} />
                <li className={navLinkDivStyle}><Link className={navLinkStyle} style={{ border: "none" }} to="/songrequests">Song Requests</Link></li>
            </ul>

            <Link className={rsvpButtonStyle} to="/rsvp">RSVP</Link>
        </div>
    );
};

export default Home;