import React from 'react';
import { pageNotFoundStyle } from '../styles/PageNotFound.styles';

const PageNotFound = () => {
    return (
        <div className={pageNotFoundStyle}>
            <h2>404 Error - Page Not Found</h2>
            <p>Sorry, this page doesn't exist!</p>
            <p><a href="/">*your domain*</a></p>
        </div>
    );
};

export default PageNotFound;