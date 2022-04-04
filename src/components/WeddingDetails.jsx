import React from 'react';
import Countdown from 'react-countdown';
import ImageGallery from 'react-image-gallery';
import Navbar from './subcomponents/Navbar';
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import {
    detailsPageStyle,
    detailsHeaderStyle,
    headerInsideStyle,
    headerPartParentStyle,
    detailsHeaderPartStyle,
    weddingDetailsContainerStyle,
    countdownStyle,
    countdownHeaderStyle,
    countdownTimeStyle,
    churchDetailsStyle,
    venueDetailsStyle,
    placeHeaderStyle,
    descriptionContainerStyle,
    imageGalleryStyle,
    placeBriefStyle,
    placeDirectionsHeaderStyle,
    placeInfoStyle,
    detailsLineBreakStyle,
    directionsIFrameStyle,
    weddingPartyContainer,
    wpHeaderStyle,
    wpDescriptionStyle,
    placeDescriptionStyle,
    brideGroomGridStyle,
    familyGridStyle,
    brideFamilyGridStyle,
    groomFamilyGridStyle,
    maidHonorBestManGridStyle,
    generalPeopleGridStyle,
    bridesmaidsGridStyle,
    groomsmenGridStyle,
    weddingPartyCardStyle,
    cardImageStyle,
    cardNameStyle,
    cardPositionStyle,
    cardEstStyle
} from '../styles/WeddingDetails.styles';
import Footer from './subcomponents/Footer';
import NavMenu from './subcomponents/NavMenu';

// Pics should probably (definitely) be handled CMS-ly, but these
// photos change so infrequently that it's not worth the effort!

const WeddingDetails = () => {
    const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          return <div className={countdownStyle}>Just Married!</div>;
        } else {
          // Render a countdown
          return <span className={countdownTimeStyle}>{days} Days, {hours} Hours, {minutes} Minutes, {seconds} Seconds</span>;
        }
    };

    return(
        <div className={detailsPageStyle}>
            <NavMenu/>
            
            <header className={detailsHeaderStyle}>
                <div className={headerInsideStyle}>
                    <div className={headerPartParentStyle}>
                        <h1 className={detailsHeaderPartStyle}>Wedding Details</h1>
                    </div>
                </div>
            </header>

            <Navbar/>

            <div className={weddingDetailsContainerStyle}>
                <div className={countdownStyle}>
                    <p className={countdownHeaderStyle}>Countdown to the Wedding:</p>
                    <Countdown date={new Date("January 1, 2099 15:00:00").getTime()} renderer={countdownRenderer}/>
                </div>
            </div>

            <div className={churchDetailsStyle}>
                <ImageGallery additionalClass={imageGalleryStyle} items={{}} showFullscreenButton={false} showPlayButton={false}/>

                <div className={descriptionContainerStyle}>
                    <h3 className={placeHeaderStyle}>Wedding Ceremony</h3>
                    <p className={placeDescriptionStyle}>*ceremony details*</p>
                </div>

                <div className={placeBriefStyle}>
                    <h3 className={placeDirectionsHeaderStyle}>Details & Directions</h3>
                    <p className={placeInfoStyle}>0:00PM - 0:00PM</p>
                    <div className={detailsLineBreakStyle}/>
                    <a className={placeInfoStyle} href="/" target="_blank" rel="noopener noreferrer">Website</a>
                    <div className={detailsLineBreakStyle}/>
                    <div className={placeInfoStyle}>
                        <p>Addr Ln 1</p>
                        <p>Addr Ln 2</p>
                    </div>
                    <div className={directionsIFrameStyle}>
                        <iframe src="https://www.google.com/maps/embed?pb=CHANGE" 
                        width="400" height="300" frameBorder="0" style={{border: 0}} allowFullScreen="" aria-hidden="false" tabIndex="0" title="ChurchDirections"></iframe>
                    </div>
                </div>
            </div>

            <div className={venueDetailsStyle}>
                <ImageGallery additionalClass={imageGalleryStyle} items={{}} showFullscreenButton={false} showPlayButton={false}/>

                <div className={descriptionContainerStyle}>
                    <h3 className={placeHeaderStyle}>Wedding Reception</h3>
                    <p className={placeDescriptionStyle}>
                        *insert reception details here*
                    </p>
                </div>
                
                <div className={placeBriefStyle}>
                    <h3 className={placeDirectionsHeaderStyle}>Details & Directions</h3>
                    <p className={placeInfoStyle}>0:00PM - 0:00PM</p>
                    <div className={detailsLineBreakStyle}/>
                    <div className={placeInfoStyle}>
                        <p>Addr Ln 1</p>
                        <p>Addr Ln 2</p>
                    </div>
                    <div className={directionsIFrameStyle}>
                        <iframe src="https://www.google.com/maps/embed?pb=CHANGE" 
                        width="400" height="300" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0" title="VenueDirections" loading="lazy"/>
                    </div>
                </div>
            </div>
            
            <div className={weddingPartyContainer}>
                <h1 className={wpHeaderStyle}>The Wedding Party</h1>
                <p className={wpDescriptionStyle}>Those who play a special role in the lives of the Bride and Groom</p>

                <div className={brideGroomGridStyle}>
                    <div className={weddingPartyCardStyle}>
                        <img className={cardImageStyle} src="" alt=""/>
                        <p className={cardNameStyle}>*Bride's name*</p>
                        <p className={cardPositionStyle}>The Bride</p>
                    </div>

                    <div className={weddingPartyCardStyle}>
                        <img className={cardImageStyle} src="" alt=""/>
                        <p className={cardNameStyle}>*Groom's name*</p>
                        <p className={cardPositionStyle}>The Groom</p>
                    </div>
                </div>

                <div className={familyGridStyle}>
                    <div className={brideFamilyGridStyle}>
                        <div className={weddingPartyCardStyle}>
                            <img className={cardImageStyle} src="" alt=""/>
                            <p className={cardNameStyle}>*name*</p>
                            <p className={cardPositionStyle}>Father of the Bride</p>
                        </div>

                        <div className={weddingPartyCardStyle}>
                            <img className={cardImageStyle} src="" alt=""/>
                            <p className={cardNameStyle}>*name*</p>
                            <p className={cardPositionStyle}>Mother of the Bride</p>
                        </div>
                    </div>

                    <div className={groomFamilyGridStyle}>
                        <div className={weddingPartyCardStyle}>
                            <img className={cardImageStyle} alt=""/>
                            <p className={cardNameStyle}>*name*</p>
                            <p className={cardPositionStyle}>Father of the Groom</p>
                        </div>

                        <div className={weddingPartyCardStyle}>
                            <img className={cardImageStyle} src="" alt=""/>
                            <p className={cardNameStyle}>*name*</p>
                            <p className={cardPositionStyle}>Mother of the Groom</p>
                        </div>
                    </div>
                </div>

                <div className={maidHonorBestManGridStyle}>
                    <div className={weddingPartyCardStyle}>
                        <img className={cardImageStyle} src="" alt=""/>
                        <p className={cardNameStyle}>*name*</p>
                        <p className={cardPositionStyle}>Maid of Honor</p>
                        <p className={cardEstStyle}>Est. 0000</p>
                    </div>

                    <div className={weddingPartyCardStyle}>
                        <img className={cardImageStyle} src="" alt=""/>
                        <p className={cardNameStyle}>*name*</p>
                        <p className={cardPositionStyle}>Best Man</p>
                        <p className={cardEstStyle}>Est. 0000</p>
                    </div>
                </div>

                <div className={maidHonorBestManGridStyle}>
                    <div className={weddingPartyCardStyle}>
                        <img className={cardImageStyle} src="" alt=""/>
                        <p className={cardNameStyle}>*name*</p>
                        <p className={cardPositionStyle}>Ring Bearer</p>
                    </div>

                    <div className={weddingPartyCardStyle}>
                        <img className={cardImageStyle} src="" alt=""/>
                        <p className={cardNameStyle}>*name*</p>
                        <p className={cardPositionStyle}>Flower Girl</p>
                    </div>
                </div>

                <div className={generalPeopleGridStyle}>
                    <div className={bridesmaidsGridStyle}>
                        <div className={weddingPartyCardStyle}>
                            <img className={cardImageStyle} src="" alt=""/>
                            <p className={cardNameStyle}>*name*</p>
                            <p className={cardPositionStyle}>Bridesmaid</p>
                            <p className={cardEstStyle}>Est. 0000</p>
                        </div>

                        <div className={weddingPartyCardStyle}>
                            <img className={cardImageStyle} src="" alt=""/>
                            <p className={cardNameStyle}>*name*</p>
                            <p className={cardPositionStyle}>Bridesmaid</p>
                            <p className={cardEstStyle}>Est. 0000</p>
                        </div>
                    </div>

                    <div className={groomsmenGridStyle}>
                        <div className={weddingPartyCardStyle}>
                            <img className={cardImageStyle} src="" alt=""/>
                            <p className={cardNameStyle}>Cameron Johnson</p>
                            <p className={cardPositionStyle}>Groomsman</p>
                            <p className={cardEstStyle}>Est. 0000</p>
                        </div>

                        <div className={weddingPartyCardStyle}>
                            <img className={cardImageStyle} src="" alt=""/>
                            <p className={cardNameStyle}>*name*</p>
                            <p className={cardPositionStyle}>Groomsman</p>
                            <p className={cardEstStyle}>Est. 0000</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </div>
    );
};

export default WeddingDetails;