import React, { useEffect, useState } from 'react';
import firebase from '../Firebase.js';
import SongRequestList from './subcomponents/SongRequestList';
import {
    djLoginPageStyle,
    djLoginFormStyle,
    djLoginLabelStyle,
    djLoginInputStyle,
    djLoginSubmitStyle,
    djPortalPageStyle
} from '../styles/DJ.styles';

const DJ = () => {
    const [authUID, setAuthUID] = useState(undefined);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState('');

    const getCurrentUser = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setAuthUID(user.uid);
            }
        });
    };

    const handlePasswordInput = event => {
        setPassword(event.target.value);
    };

    const djLogin = event => {
        firebase.firestore().collection("info").doc("djPassword").get().then(doc => {
            if (password === doc.data().password) {
                setIsLoggedIn(true);
            }
        });

        event.preventDefault();
    };

    useEffect(getCurrentUser, []);

    return (<>
        {isLoggedIn ? 
        (<div className={djPortalPageStyle}>
            <h1>DJ Portal</h1>
            <SongRequestList isForAdmin={true} authUID={authUID}/>
        </div>) :
        (<div className={djLoginPageStyle}>
            <form className={djLoginFormStyle} method="POST" onSubmit={djLogin}>
                
            <label className={djLoginLabelStyle}>Password<input className={djLoginInputStyle} type="password" value={password} onChange={handlePasswordInput} placeholder="DJ's Password"/></label>
                <input className={djLoginSubmitStyle} type="submit" value="Login"/>
            </form>
        </div>)}
    </>);
};

export default DJ;