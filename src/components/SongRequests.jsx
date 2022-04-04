import React, { useState, useEffect } from 'react';
import firebase from '../Firebase.js';
import SongRequestList from './subcomponents/SongRequestList';
import Navbar from './subcomponents/Navbar';
import Footer from './subcomponents/Footer';
import {
    songRequestsPageStyle,
    srHeaderContainerStyle,
    srHeaderStyle,
    srHeaderDescriptionStyle,
    requestFormStyle,
    searchHeaderStyle,
    searchInputContainerStyle,
    searchInputStyle,
    searchedSongRowStyle,
    selectedSearchedSongRowStyle,
    srSubmitStyle,
    requestListStyle,
    requestListListStyle,
    srInfoStyle,
    srNameStyle,
    srArtistStyle
} from '../styles/SongRequests.styles';
import NavMenu from './subcomponents/NavMenu.jsx';

const SongRequests = () => {
    const [selectedSongImageSrc, setSelectedSongImageSrc] = useState('');
    const [selectedSongName, setSelectedSongName] = useState('');
    const [selectedSongArtist, setSelectedSongArtist] = useState('');
    const [selectedSongID, setSelectedSongID] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchedSongs, setSearchedSongs] = useState(null);
    const [spotifyAccessToken, setSpotifyAccessToken] = useState(undefined);
    const [authUID, setAuthUID] = useState(undefined);
    let typingTimer;

    const getSpotifyAccessToken = () => {
        fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${btoa('9ef7247c8d4a45289dae389df41340a6:99276bacd5e940d895c519b2b5662a7e')}`
            },
            body: 'grant_type=client_credentials'
        }).then(response => response.json()).then(result => {
            setSpotifyAccessToken(result.access_token);
        }).catch(error => {
            console.log(error);
        });
    };

    const getCurrentUser = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setAuthUID(user.uid);
            }
        });
    };

    const handleInputChange = event => {
        setSearchQuery(event.target.value);
        clearTimeout(typingTimer);
        if (event.target.value) {
            typingTimer = setTimeout(searchSongs, 500);
        }
    };

    const addSong = event => {
        firebase.firestore().collection("songrequests").doc(selectedSongID).get().then(doc => {
            if (doc.exists) {
                return;
            } else {
                let newRequest = {
                    songName: selectedSongName,
                    artist: selectedSongArtist,
                    imageSource: selectedSongImageSrc,
                    songID: selectedSongID,
                    usersLiked: [],
                    timestamp: firebase.firestore.Timestamp.now()
                };

                if (authUID) {
                    newRequest.submitter = authUID;
                }

                //Submit to firestore DB
                firebase.firestore().collection("songrequests").doc(selectedSongID).set(newRequest).then(docRef => {
                    setSearchQuery('');
                    setSearchedSongs(null);
                }).catch(error => {
                    console.error("Error adding document: ", error);
                });
            }
        });

        event.preventDefault();
    };

    const searchSongs = () => {
        fetch('https://api.spotify.com/v1/search?q=' + searchQuery.replace(" ", "+") + "&type=track", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + spotifyAccessToken
            }
        }).then(response => response.json()).then(result => {
            setSearchedSongs(result.tracks.items);
        }).catch(error => {
            console.log(error);
        });
    };

    const selectSong = (event, songName, songImgSrc, songArtist, songID) => {
        setSelectedSongName(songName);
        setSelectedSongImageSrc(songImgSrc);
        setSelectedSongArtist(songArtist);
        setSelectedSongID(songID);
    };

    const checkIfSelected = songID => {
        return songID === selectedSongID ? `${searchedSongRowStyle} ${selectedSearchedSongRowStyle}` : searchedSongRowStyle;
    };

    useEffect(() => {
        getSpotifyAccessToken();
        getCurrentUser();
    }, []);

    return (
        <div className={songRequestsPageStyle}>
            <NavMenu/>
            
            <header className={srHeaderContainerStyle}>
                <h1 className={srHeaderStyle}>Song Requests</h1>
                <p className={srHeaderDescriptionStyle}>See what songs people have requested for the reception, and even add your own!</p>
            </header>

            <Navbar/>

            <form className={requestFormStyle} onSubmit={addSong} method="POST">
                <h3 className={searchHeaderStyle}>Add a Song</h3>
                <p>Search for a song, click it, and click 'Add Song' to make a request!</p>
                <div className={searchInputContainerStyle}>
                    <input className={searchInputStyle} type="search" placeholder="Search music..." name="searchQuery" value={searchQuery} onChange={handleInputChange}/>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>

                {searchedSongs &&
                <div className={requestListStyle}>
                    <ul className={requestListListStyle}>
                        {searchedSongs.map((searchedSong, index) => 
                            <li key={index} className={checkIfSelected(searchedSong.id)} onClick={event => selectSong(event, searchedSong.name, searchedSong.album.images[2].url, searchedSong.artists[0].name, searchedSong.id)}>
                                <img src={searchedSong.album.images[2].url} alt="Track Art"/>
                                <div className={srInfoStyle}>
                                    <p className={srNameStyle}>{searchedSong.name}</p>
                                    <p className={srArtistStyle}>by {searchedSong.artists[0].name}</p>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>}

                {searchedSongs &&
                <input className={srSubmitStyle} type="submit" value='Add Song'/>}
            </form>

            <SongRequestList isForAdmin={false} authUID={authUID}/>

            <Footer/>
        </div>
    );
};

export default SongRequests;