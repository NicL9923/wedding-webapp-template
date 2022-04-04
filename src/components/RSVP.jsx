import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../Firebase.js';
import PhoneInput from 'react-phone-number-input/input';
import { formatPhoneNumber } from 'react-phone-number-input';
import { foodChoicesAreEnabled } from '../Settings.js';
import {
    rsvpPageStyle,
    goBackStyle,
    formContainerStyle,
    formHeaderStyle,
    formSubheaderStyle,
    fullNamesHeaderStyle,
    fullNamesDescriptionStyle,
    contactNumberHeaderStyle,
    contactNumberSubheaderStyle,
    contactNumberInputStyle,
    attendingQuestionStyle,
    attendingRadioDivStyle,
    attendingRadioButtonStyle,
    attendingYesNoInputsStyle,
    foodChoicesHeaderStyle,
    personNameStyle,
    foodRadioContainerStyle,
    foodRadioStyle,
    foodRadioChoiceStyle,
    submitButtonStyle,
    submittedRsvpContainerStyle,
    rsvpThanksStyle,
    namesInputStyle,
    inputGroupStyle,
    addGuestButtonStyle,
    removeGuessIconStyle
} from '../styles/RSVP.styles';

const maxAttendees = 20;

const RSVP = () => {
    const [isAttending, setIsAttending] = useState('no');
    const [attendees, setAttendees] = useState([{ firstName: '', lastName: '' }]);
    const [foodChoices, setFoodChoices] = useState([]);
    const [contactNumber, setContactNumber] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [authUID, setAuthUID] = useState(undefined);

    const checkIfAlreadySubmitted = (authID) => {
        firebase.firestore().collection("rsvps").where("authID", "==", authID).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                if (doc.data().authID === authID) {
                    setSubmitted(true);
                }
            });
        })
        .catch(error => {
            console.log("Error getting documents: ", error);
        });
    };

    const getCurrentUser = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setAuthUID(user.uid);
                checkIfAlreadySubmitted(user.uid);
            }
        });
    };

    const equalizeAttendeesAndFoodChoices = () => {
        //Makes sure the length of the two arrays match (must be one food choice per person)
        let arrayDif = foodChoices.length - attendees.length;
        if (arrayDif > 0) {
            let foodArray = foodChoices;

            for (let i = arrayDif; i > 0; i--) {
                foodArray.pop();
            }

            setFoodChoices(foodArray);
        }
    };

    const handleNamesInput = (event, index, isFirstName) => {
        if (foodChoicesAreEnabled) {
            equalizeAttendeesAndFoodChoices();
        }

        let newAttendees = attendees;

        if (isFirstName) {
            newAttendees[index].firstName = event.target.value;
        } else {
            newAttendees[index].lastName = event.target.value;
        }
        
        setAttendees([...newAttendees]);
    };

    const handleNumberInput = contactNumStr => {
        setContactNumber(contactNumStr); 
    };

    const handleFoodChoice = event => {
        let choices = foodChoices;
        choices[parseInt(event.target.name.split('_')[1])] = event.target.value;
        
        setFoodChoices(choices);
    };

    const getAttendeesAsStrings = () => {
        let attendeesAsStrings = [];

        attendees.forEach(attendee => {
            attendeesAsStrings.push(`${attendee.firstName} ${attendee.lastName}`);
        });

        return attendeesAsStrings;
    };

    const submitRSVP = event => {
        let newRsvp = {
            attendees: getAttendeesAsStrings(),
            isAttending,
            contactNumber: formatPhoneNumber(contactNumber),
            authID: authUID,
            timestamp: firebase.firestore.Timestamp.now()
        };

        if (foodChoicesAreEnabled) {
            newRsvp.foodChoices = foodChoices;
        }

        //Submit to firestore DB
        firebase.firestore().collection("rsvps").add(newRsvp)
        .then(docRef => {
            console.log("Document written with ID: ", docRef.id);
            setSubmitted(true);
        })
        .catch(error => {
            console.error("Error adding document: ", error);
        });

        event.preventDefault();
    };

    const removeAttendee = index => {
        let people = attendees;
        people.splice(index, 1);
        setAttendees([...people]);
    };

    useEffect(getCurrentUser, []);

    return(
        <div className={rsvpPageStyle}>
            <Link to="/" className={goBackStyle}>Go Back</Link>

            {!submitted ? 
            (<form className={formContainerStyle} onSubmit={submitRSVP} method="POST">
                <h1 className={formHeaderStyle}>RSVP Form</h1>
                <div>
                    <p>April 2nd, 2022 @ 3:00PM</p>
                    <p className={formSubheaderStyle}>For more information, see the wedding details page.</p>
                </div>

                <p className={fullNamesHeaderStyle}>Guest Names</p>
                <p className={fullNamesDescriptionStyle}>Please include yourself, and any family or additional guests, as specified in the invitation</p>
                <div className={inputGroupStyle}>
                    {attendees.map((attendee, index) =>
                    <div>
                        <h5>Guest #{index + 1}</h5>

                        <div style={{ position: 'relative' }}>
                            <input
                                type='text'
                                placeholder='First name'
                                onChange={event => handleNamesInput(event, index, true)}
                                className={namesInputStyle}
                                required
                            />

                            <input
                                type='text'
                                placeholder='Last name'
                                onChange={event => handleNamesInput(event, index, false)}
                                className={namesInputStyle}
                                required
                            />

                            {index !== 0 && 
                                <i
                                    className={`fa fa-times ${removeGuessIconStyle}`}
                                    onClick={() => removeAttendee(index)}
                                    aria-hidden="true"
                                />
                            }
                        </div>
                    </div>
                    )}

                    {attendees.length < maxAttendees && 
                        
                        <button className={addGuestButtonStyle} onClick={() => setAttendees([...attendees, {}])}><i className="fa fa-plus" aria-hidden="true" /> Add a Guest</button>
                    }
                </div>

                <p className={contactNumberHeaderStyle}>Contact Number</p>
                <p className={contactNumberSubheaderStyle}>(in case we need to verify anything)</p>
                <PhoneInput className={contactNumberInputStyle} placeholder='(XXX) XXX-XXXX' country="US" value={contactNumber} onChange={handleNumberInput} required />

                <p className={attendingQuestionStyle}>Will you be attending?</p>
                <div className={attendingRadioDivStyle}>
                    <label className={attendingRadioButtonStyle}>
                        <input type="radio" className={attendingYesNoInputsStyle} id="attendingYes" name="isAttending" value="yes" onChange={e => setIsAttending(e.target.value)} required/>
                        Yes, I'll be there!
                    </label>
                    <label className={attendingRadioButtonStyle}>
                        <input type="radio" className={attendingYesNoInputsStyle} id="attendingNo" name="isAttending" value="no" onChange={e => setIsAttending(e.target.value)}/>
                        No, I'm unable to make it.
                    </label>
                </div>

                {foodChoicesAreEnabled && isAttending === "yes" &&
                <>
                    <p className={foodChoicesHeaderStyle}>Food Choices</p>

                    <div className={inputGroupStyle}>
                        {attendees.map((attendee, index) =>
                        <>
                            <p>What would <span className={personNameStyle}>{index === 0 ? 'you' : (attendee.firstName ? attendee.firstName : `Guest #${index + 1}`)}</span> like to eat?</p>
                            <div className={foodRadioContainerStyle}>
                                <label className={foodRadioStyle}>
                                    <input type="radio" className={foodRadioChoiceStyle} id="choice1" name={"foodChoice_" + index} value="tacos" onChange={handleFoodChoice} required/>
                                    Tacos
                                </label>
                                <label className={foodRadioStyle}>
                                    <input type="radio" className={foodRadioChoiceStyle} id="choice2" name={"foodChoice_" + index} value="veganTacos" onChange={handleFoodChoice}/>
                                    Vegan Tacos
                                </label>
                                <label className={foodRadioStyle}>
                                    <input type="radio" className={foodRadioChoiceStyle} id="choice3" name={"foodChoice_" + index} value="idk" onChange={handleFoodChoice}/>
                                    "I dOn'T kNoW"
                                </label>
                            </div>
                        </>
                        )}
                    </div>
                </>}
                
                <input type="submit" className={submitButtonStyle} value='Submit'/>
            </form>) : (
            <div className={submittedRsvpContainerStyle}>
                <p className={rsvpThanksStyle}>Thank you for RSVPing!</p>
                <p>If you think you made a mistake, or would like to change something, please text <a href="tel:+1-832-797-0138">(832) 797-0138</a>.</p>
                <p>Also, feel free to <a href="/songrequests">request songs</a> for the reception!</p>
            </div>
            )}
        </div>
    );
};

export default RSVP;