import { media, style } from 'typestyle';
import { url } from 'csx';
import { ACCENT_COLOR, PRIMARY_COLOR } from './StyleConstants';

export const homepageStyle = style({
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    maxWidth: '100vw',
    margin: 0,
    padding: 0,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
}, media({ maxWidth: 600 }, { 
    justifyContent: 'start'
}));

export const homepageBackgroundStyle = style({
    height: '100vh',
    width: '100vw',
    backgroundColor: '#fcfcfc',
    backgroundImage: url(''),
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    position: 'absolute',
    zIndex: -2
});

export const homepageOverlayStyle = style({
    backgroundColor: '#fafafa',
    height: '100vh',
    width: '100vw',
    opacity: '75%',
    position: 'absolute',
    zIndex: -1
});

export const headerStyle = style({
    margin: 0,
    padding: 0,
    fontSize: '100px',
    fontFamily: 'Bacalisties',
    color: PRIMARY_COLOR
}, media({ maxWidth: 600 }, { 
    fontSize: '58px',
    width: '60vw',
    margin: '15px auto',
    paddingBottom: '5px',
    lineHeight: '65px'
}));

export const infoItemStyle = style({
    margin: 0,
    padding: '3px',
    color: '#212121',
    fontWeight: 600
});

export const navLinksContainerStyle = style({
    listStyleType: 'none',
    padding: '30px'
}, media({ maxWidth: 600 }, { 
    textAlign: 'center',
    padding: 0,
    margin: '5px 0 10px 0'
}));

export const navLinkDivStyle = style({
    display: 'inline'
}, media({ maxWidth: 600 }, { 
    display: 'block',
    margin: '2px'
}));

export const navLinkStyle = style({
    textDecoration: 'none',
    color: PRIMARY_COLOR,
    padding: '12px',
    fontSize: '21px',
    fontWeight: 'bold',
    webkitTransition: '0.3s ease',
    transition: '0.3s ease',
    lineHeight: '50px',
    $nest: {
        '&:hover': {
            color: ACCENT_COLOR,
            fontSize: '22px'
        },
    },
});

export const mobileBorderStyle = style({
    backgroundImage: url(''),
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '120px',
    height: '10px',
    margin: '0 auto'
});

export const rsvpButtonStyle = style({
    textDecoration: 'none',
    border: `3px solid #644535`,
    backgroundColor: '#9A8468',
    cursor: 'pointer',
    padding: '10px 20px',
    marginTop: '30px',
    fontWeight: 'bold',
    fontSize: '24px',
    webkitTransition: '0.4s ease',
    transition: '0.4s ease',
    display: 'block',
    width: '100px',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#212121'
}, media({ maxWidth: 600 }, {
    margin: '5px auto'
}));