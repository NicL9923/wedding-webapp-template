import React from 'react';
import { footerStyle } from '../../styles/Footer.styles';

const funFacts = [
    'Insert fun facts as new strings here!'
];

const Footer = () => {
    const randomIndex = Math.floor(Math.random() * funFacts.length);

    return (
        <footer className={footerStyle}>
            <h3>Fun Fact</h3>
            <p>{funFacts[randomIndex]}</p>
        </footer>
    );
};

export default Footer;