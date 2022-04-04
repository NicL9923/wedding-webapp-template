import React, { useEffect, useState } from 'react';
import firebase from '../../Firebase';
import {
    requestListStyle,
    requestListListStyle,
    srInfoStyle,
    srNameStyle,
    srArtistStyle
} from '../../styles/SongRequests.styles';
import {
    requestListContainerStyle,
    requestListHeaderStyle,
    refreshIconStyle,
    songRequestRowStyle,
    srLikeContainerStyle,
    sortByButtonStyle,

} from '../../styles/SongRequestList.styles';

const SORT_BY_LIKES = 'Sort by Likes';
const SORT_BY_DATE = 'Sort by Date';

const SongRequestList = props => {
    const { isForAdmin, authUID } = props;
    const [songRequestList, setSongRequestList] = useState([]);
    const [isSortedByDate, setIsSortedByDate] = useState(true);
    const [sortByBnText, setSortByBnText] = useState(SORT_BY_LIKES);

    const fetchSongRequestList = () => {
        firebase.firestore().collection("songrequests").orderBy("timestamp").get().then(querySnapshot => {
            let queryArray = [];

            querySnapshot.forEach(doc => {
                queryArray.push({ songName: doc.data().songName, artist: doc.data().artist, imageSource: doc.data().imageSource, songID: doc.data().songID, usersLiked: doc.data().usersLiked, timestamp: doc.data().timestamp });
            });

            //Make sure fetch results match the current sorting scheme
            if (isSortedByDate) {
                queryArray.sort((a, b) => a.timestamp.toDate() - b.timestamp.toDate());
            }
            else {
                queryArray.sort((a, b) => b.usersLiked.length - a.usersLiked.length);
            }

            setSongRequestList(queryArray);
        });
    };

    const checkIfUserLiked = songRequest => {
        if (songRequest.usersLiked.includes(authUID)) {
            return true;
        }
        else {
            return false;
        }
    };

    const likeSong = (event, songID) => {
        if (!authUID) return;

        let songDocRef = firebase.firestore().collection("songrequests").doc(songID);

        firebase.firestore().runTransaction(transaction => {
            return transaction.get(songDocRef).then(doc => {
                if (doc.exists) {
                    let usersLikedArray = doc.data().usersLiked;

                    if (!usersLikedArray.includes(authUID)) {
                        usersLikedArray.push(authUID);
                        transaction.update(songDocRef, { usersLiked: usersLikedArray });
                        return usersLikedArray;
                    }
                }
            });
        }).then(usersLikedArray => {
            fetchSongRequestList();
        }).catch(err => {
            console.error(err);
        });

        event.preventDefault();
    };

    const unlikeSong = (event, songID) => {
        //Not necessary to check if authUID because this isn't accessible if that isn't already the case
        let songDocRef = firebase.firestore().collection("songrequests").doc(songID);

        firebase.firestore().runTransaction(transaction => {
            return transaction.get(songDocRef).then(doc => {
                if (doc.exists) {
                    let usersLikedArray = doc.data().usersLiked;

                    if (usersLikedArray.includes(authUID)) {
                        usersLikedArray.splice(usersLikedArray.indexOf(authUID), 1);
                        transaction.update(songDocRef, { usersLiked: usersLikedArray });
                        return usersLikedArray;
                    }
                }
            });
        }).then(usersLikedArray => {
            fetchSongRequestList();
        }).catch(err => {
            console.error(err);
        });

        event.preventDefault();
    };

    const removeSong = (event, songID) => {
        if (!window.confirm("Are you sure you want to delete this song request?")) {
            return;
        }

        firebase.firestore().collection("songrequests").doc(songID).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch(error => {
            console.error("Error removing document: ", error);
        });

        fetchSongRequestList();
    };

    const sortSongList = event => {
        let songList = songRequestList;

        //Sort by likes
        if (isSortedByDate) {
            songList.sort((a, b) => b.usersLiked.length - a.usersLiked.length);
            setSongRequestList(songList);
            setIsSortedByDate(false);
            setSortByBnText(SORT_BY_DATE);
        }
        //Sort by date
        else {
            songList.sort((a, b) => a.timestamp.toDate() - b.timestamp.toDate());
            setSongRequestList(songList);
            setIsSortedByDate(true);
            setSortByBnText(SORT_BY_LIKES);
        }
        
        event.preventDefault();
    };

    useEffect(fetchSongRequestList, []);

    return (
        <div className={requestListContainerStyle}>
            <h2 className={requestListHeaderStyle}>Song Requests</h2>
            <i className={`fa fa-refresh fa-lg ${refreshIconStyle}`} aria-hidden="false" onClick={fetchSongRequestList}></i>
            <div className={requestListStyle}>
                <ul className={requestListListStyle}>
                    {songRequestList.map((songRequest, index) => 
                        <li className={songRequestRowStyle} key={index}>
                            <img src={songRequest.imageSource} alt="Track Art"/>
                            <div className={srInfoStyle}>
                                <p className={srNameStyle}>{songRequest.songName}</p>
                                <p className={srArtistStyle}>by {songRequest.artist}</p>
                            </div>
                            {!isForAdmin ? (
                            <div className={srLikeContainerStyle}>
                                {checkIfUserLiked(songRequest) ? 
                                (<i className="fa fa-thumbs-up fa-2x" aria-hidden="false" onClick={event => unlikeSong(event, songRequest.songID)}></i>) : 
                                (<i className="fa fa-thumbs-o-up fa-2x" aria-hidden="false" onClick={event => likeSong(event, songRequest.songID)}></i>)}

                                <p>{songRequest.usersLiked.length > 0 ? (songRequest.usersLiked.length) : ""}</p>
                            </div>
                            ) : (
                            <div className={srLikeContainerStyle}>
                                <i className="fa fa-times fa-2x" aria-hidden="false" onClick={event => removeSong(event, songRequest.songID)}></i>
                                <p>{songRequest.usersLiked.length > 0 ? songRequest.usersLiked.length : "0"} likes</p>
                            </div>
                            )
                            }
                        </li>
                    )}
                </ul>
            </div>

            <button className={sortByButtonStyle} onClick={sortSongList}>{sortByBnText}</button>
        </div>
    );
};

export default SongRequestList;