import React, { useEffect, useState } from 'react';
import firebase from '../Firebase.js';
import SongRequestList from './subcomponents/SongRequestList';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import sjcl from 'sjcl';
import {
    adminLoginPageStyle,
    adminLoginFormStyle,
    adminLoginLabelStyle,
    adminLoginInputStyle,
    adminLoginSubmitStyle,
    adminManagementPageStyle,
    adminPortalHeaderStyle,
    rsvpListContainerStyle,
    rsvpListHeaderStyle,
    rsvpListStyle,
    rsvpListListStyle,
    rsvpListItemStyle,
    rsvpListItemInfoStyle,
    rsvpListItemContactStyle,
    rsvpListItemAttendingStyle,
    rsvpListItemSubmittedStyle,
    rsvpListItemSpanStyle,
    rsvpListItemIconsStyle,
    editRsvpPopupBoxStyle,
    editRsvpHeaderStyle,
    editRsvpSubheaderStyle,
    editRsvpAttendingHeaderStyle,
    editRsvpAttendingInputsStyle,
    editDeleteAttendeeStyle,
    editRsvpAttendingInputStyle,
    editRsvpSelectStyle,
    editRsvpButtonsStyle,
    editRsvpCancelAndDoneButtonStyle,
    editRsvpAddAttendeeButtonStyle,
    editRsvpContactNumberStyle,
    rsvpActionsStyle,
    rsvpReportButtonStyle
} from '../styles/Admin.styles';
import { foodChoicesAreEnabled } from '../Settings.js';

const useForceUpdate = () => {
    // eslint-disable-next-line
    const [value, setValue] = useState(0);
    return () => setValue(value => value + 1);
};

const Admin = () => {
    const [rsvpList, setRsvpList] = useState([]);
    const [authUID, setAuthUID] = useState(undefined);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState('');
    const [editingRsvp, setEditingRsvp] = useState(false);
    const [rsvpBeingEdited, setRsvpBeingEdited] = useState({});
    const forceUpdate = useForceUpdate();

    const getCurrentUser = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setAuthUID(user.uid);
            }
        });
    };

    const fetchRsvpList = () => {
        firebase.firestore().collection("rsvps").orderBy("timestamp", "desc").get().then(querySnapshot => {
            let queryArray = [];

            querySnapshot.forEach(doc => {
                let rsvpItem = {
                    docID: doc.id,
                    attendees: doc.data().attendees,
                    isAttending: doc.data().isAttending,
                    contactNumber: doc.data().contactNumber,
                    timestamp: doc.data().timestamp.toDate()
                };

                if (foodChoicesAreEnabled) {
                    rsvpItem.foodChoices = doc.data().foodChoices;
                }

                queryArray.push(rsvpItem);
            });

            setRsvpList(queryArray);
        });
    };

    const generatePdfReport = () => {
        const doc = new jsPDF();
        const date = Date().split(" ");
        const dateStr = date[2] + date[1].toUpperCase() + date[4].replaceAll(':', '-');
        const pageDateHeader = date[1] + " " + date[2] + " " + date[3] + " @ " + date[4];

        //console.log(doc.getFontList());
        doc.setFont("helvetica", "bold");

        //Use rsvpList to compile necessary RSVP info
        doc.setFontSize(24);
        doc.text("RSVP Report", 105, 15, "center");
        doc.setFont("helvetica", "normal");
        doc.setFontSize(16);
        doc.text(pageDateHeader, 105, 22, "center");

        doc.setFontSize(12);
        doc.text("Total RSVPs Received: " + rsvpList.length, 15, 35, "left");
        
        //Count attendees and non-attendees, and build list of attendees to create alphetical list for RSVP report
        let attendeeCount = 0;
        let attendeeList = [];
        let nonAttendeeCount = 0;
        rsvpList.forEach(rsvp => {
            if (rsvp.isAttending === "yes") {
                attendeeCount += rsvp.attendees.length;
                rsvp.attendees.forEach(attendee => {
                    attendeeList.push({ firstName: attendee.split(' ')[0], lastName: attendee.split(' ')[1], rsvpID: rsvp.docID });
                });
            }
            else {
                nonAttendeeCount += rsvp.attendees.length;
            }
        });
        doc.text("# of People Attending: " + attendeeCount, 15, 43, "left");
        doc.text("# Not Attending: " + nonAttendeeCount, 15, 51, "left");

        //Auto table -Sort alphabetically (Last Name, First Name,              RSVP ID)
        const tableColumns = ["Last Name", "First Name", "RSVP ID"];
        let tableRows = [];
        //Sort attendee list by object.lastName (A - Z)
        attendeeList.sort((a, b) => {
            if(a.lastName === "" || a.lastName === null || a.lastName === undefined) return -1;
            if(b.lastName === "" || b.lastName === null || b.lastName === undefined) return 1;

            if (a.lastName < b.lastName) return -1;
            else if (a.lastName > b.lastName) return 1;

            return 0;
        });

        //Here we add the data to the rows as lists. We could do this above where we make them objects to be more efficient, but this helps with readability for the fUtUrE or something
        attendeeList.forEach(attendee => {
            const attendeeData = [attendee.lastName, attendee.firstName, attendee.rsvpID];
            tableRows.push(attendeeData);
        });
        doc.autoTable(tableColumns, tableRows, { startY: 60 });

        doc.save(`RsvpReport_${dateStr}.pdf`);
    };

    const handlePasswordInput = event => {
        setPassword(event.target.value);
    };

    const adminLogin = event => {
        firebase.firestore().collection("info").doc("adminPassword").get().then(doc => {
            if (sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(password)) === doc.data().password) {
                setIsLoggedIn(true);
            }
        });

        event.preventDefault();
    };

    const editRsvp = () => {
        let rsvp = rsvpBeingEdited;

        return (
            <div className={editRsvpPopupBoxStyle}>
                <h2 className={editRsvpHeaderStyle}>Edit RSVP</h2>
                <p className={editRsvpSubheaderStyle}>({rsvp.docID})</p>

                <div>
                    <p className={editRsvpAttendingHeaderStyle}>Attendees</p>
                    {rsvp.attendees.map((attendee, index) => 
                        <div className={editRsvpAttendingInputsStyle}>
                            <input type="text" className={editRsvpAttendingInputStyle} value={attendee} onChange={event => { rsvp.attendees[index] =  event.target.value; setRsvpBeingEdited(rsvp); }}/>
                            <i className={`fa fa-times fa-2x ${editDeleteAttendeeStyle}`} aria-hidden="false" onClick={() => { rsvp.attendees.splice(index, 1); forceUpdate();} }></i>
                            {rsvp.isAttending === "yes" ? (<input type="text" className={editRsvpAttendingInputStyle} value={rsvp.foodChoices[index]} onChange={event => { rsvp.foodChoices[index] =  event.target.value; setRsvpBeingEdited(rsvp); }}/>) : null}
                        </div>
                    )}
                    <button className={editRsvpAddAttendeeButtonStyle} onClick={ () => { rsvp.attendees.push(""); forceUpdate();} }>Add Attendee</button>

                    <p className={editRsvpAttendingHeaderStyle}>Contact Number</p>
                    <input type="tel" className={`${editRsvpAttendingInputStyle} ${editRsvpContactNumberStyle}`} value={rsvp.contactNumber} onChange={event => { rsvp.contactNumber =  event.target.value; setRsvpBeingEdited(rsvp); }}/>

                    <p className={editRsvpAttendingHeaderStyle}>Attending</p>
                    <select className={editRsvpSelectStyle} value={rsvp.isAttending} onChange={event => { rsvp.isAttending =  event.target.value; setRsvpBeingEdited(rsvp); }}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <div className={editRsvpButtonsStyle}>
                    <button className={editRsvpCancelAndDoneButtonStyle} onClick={() => { setEditingRsvp(false); setRsvpBeingEdited({}); fetchRsvpList()}}>Cancel</button>
                    <button className={editRsvpCancelAndDoneButtonStyle} onClick={event => submitEditedRsvp(event, rsvp)}>Done</button>
                </div>
            </div>
        );
    };

    const submitEditedRsvp = (event, rsvp) => {
        let updatedRsvp = { 
            attendees: rsvp.attendees,
            contactNumber: rsvp.contactNumber,
            isAttending: rsvp.isAttending,
            lastEdited: firebase.firestore.Timestamp.now()
        };

        if (foodChoicesAreEnabled) {
            updatedRsvp.foodChoices = rsvp.foodChoices;
        }

        firebase.firestore().collection("rsvps").doc(rsvp.docID).update(updatedRsvp).then(() => {
            setEditingRsvp(false);
            setRsvpBeingEdited({});
            fetchRsvpList();
        });

        event.preventDefault();
    };

    const removeRsvp = (event, docID) => {
        if (!window.confirm("Are you sure you want to delete this RSVP?")) return;

        firebase.firestore().collection("rsvps").doc(docID).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch(error => {
            console.error("Error removing document: ", error);
        });

        event.preventDefault();
        fetchRsvpList();
    };

    const getAttendeeName = (attendee, rsvp, index) => {
        let attendeeString = attendee;

        if (foodChoicesAreEnabled) {
            if (rsvp.isAttending === 'yes') {
                attendeeString += ` (${rsvp.foodChoices[index]})`;
            } else {
                attendeeString += ` (N/A)`;
            }
        }

        return attendeeString;
    };

    useEffect(() => {
        fetchRsvpList();
        getCurrentUser();
    }, []);

    return (<>
        {isLoggedIn ? 
        (<><div className={adminManagementPageStyle} style={editingRsvp ? { filter: `blur(2px)` } : null}>
            <h1 className={adminPortalHeaderStyle}>Admin Portal</h1>

            <div className={rsvpListContainerStyle}>
                <h2 className={rsvpListHeaderStyle}>RSVP Management</h2>

                <div className={rsvpListStyle}>
                    <ul className={rsvpListListStyle}>
                        {rsvpList.map((rsvp, index) => 
                            <li className={rsvpListItemStyle} key={index}>
                                <div className={rsvpListItemInfoStyle}>
                                    {rsvp.attendees.map((attendee, index) => 
                                        <p>{getAttendeeName(attendee, rsvp, index)}</p>
                                    )}
                                    <p className={rsvpListItemContactStyle}>Contact #: <span className={rsvpListItemSpanStyle}>{rsvp.contactNumber}</span></p>
                                    <p className={rsvpListItemAttendingStyle}>Attending: <span className={rsvpListItemSpanStyle}>{rsvp.isAttending === "yes" ? "Yes" : "No"}</span></p>
                                    <p className={rsvpListItemSubmittedStyle}>Submitted: <span className={rsvpListItemSpanStyle}>{rsvp.timestamp.toLocaleString()}</span></p>

                                    <div className={rsvpListItemIconsStyle}>
                                        <i className="fa fa-pencil fa-2x" aria-hidden="false" onClick={() => { setEditingRsvp(true); setRsvpBeingEdited(rsvp); }}></i>
                                        <i className="fa fa-times fa-2x" aria-hidden="false" onClick={event => removeRsvp(event, rsvp.docID)}></i>
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>

                <div className={rsvpActionsStyle}>
                    <button className={rsvpReportButtonStyle} onClick={generatePdfReport}>Generate RSVP Report</button>
                </div>
            </div>

            <SongRequestList isForAdmin={true} authUID={authUID}/>
        </div>
        {editingRsvp && editRsvp()}
        </>) :
        (<div className={adminLoginPageStyle}>
            <form className={adminLoginFormStyle} method="POST" onSubmit={adminLogin}>
                <label className={adminLoginLabelStyle}>Password<input className={adminLoginInputStyle} type="password" value={password} onChange={handlePasswordInput} placeholder="Admin Password" autoFocus/></label>
                <input className={adminLoginSubmitStyle} type="submit" value="Login"/>
            </form>
        </div>)}
    </>);
};

export default Admin;