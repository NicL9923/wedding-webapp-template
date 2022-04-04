import React from 'react';
import Navbar from './subcomponents/Navbar';
import {
    aboutUsPageStyle,
    aboutUsHeaderStyle,
    ourStoryContainerStyle,
    ourStoryHeaderStyle,
    ourStoryBodyStyle,
    futurePlansContainerStyle,
    futurePlansImageStyle,
    futurePlansBodyStyle,
    fpBodyHeaderStyle,
    fpBodyTextStyle
} from '../styles/AboutUs.styles';
import Footer from './subcomponents/Footer';
import NavMenu from './subcomponents/NavMenu';

const AboutUs = () => {
    return(
        <div className={aboutUsPageStyle}>
            <NavMenu/>
            
            <header className={aboutUsHeaderStyle}></header>

            <Navbar/>
            
            <div className={ourStoryContainerStyle}>
                <h1 className={ourStoryHeaderStyle}>Our Story</h1>

                <p className={ourStoryBodyStyle}>
                    *story*
                </p>
            </div>

            <div className={futurePlansContainerStyle}>
                <img className={futurePlansImageStyle} src='' alt=''/>

                <div className={futurePlansBodyStyle}>
                    <h1 className={fpBodyHeaderStyle}>Future Plans</h1>
                    <p className={fpBodyTextStyle}>
                        *plans*
                    </p>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default AboutUs;