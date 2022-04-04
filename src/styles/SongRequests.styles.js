import { style, media } from 'typestyle';
import { url } from 'csx';
import { ACCENT_COLOR, PRIMARY_COLOR } from './StyleConstants';

export const songRequestsPageStyle = style({
    textAlign: 'center',
    backgroundColor: '#EAEAEA',
    height: 'auto'
});

export const srHeaderContainerStyle = style({
    backgroundColor: '#212121',
    backgroundImage: url('https://firebasestorage.googleapis.com/v0/b/kim-and-nic.appspot.com/o/song-requests-bg-min.jpg?alt=media&token=6d671863-4249-45f9-a509-92f902a80203'),
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '30% 225%',
    height: '30vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
}, media({ maxWidth: '600px' }, {
    width: '100%',
    height: '40vh',
    backgroundSize: 'cover'
}));

export const srHeaderStyle = style({
    color: PRIMARY_COLOR,
    fontSize: '60px',
    textShadow: '2px 2px 2px #212121'
}, media({ maxWidth: 600 }, { 
    fontWeight: 'normal',
    fontSize: '54px',
    width: '80%'
}));

export const srHeaderDescriptionStyle = style({
    color: '#eaeaea',
    margin: '12px auto'
});

export const requestFormStyle = style({
    margin: '20px auto',
    backgroundColor: '#FAFAFA',
    width: '35vw',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px'
}, media({ maxWidth: '600px' }, {
    width: '90%',
    flexDirection: 'column'
}));

export const searchHeaderStyle = style({
    fontSize: '28px'
});

export const searchInputContainerStyle = style({
    position: 'relative',
    width: '50%',
    margin: '5px auto',
    $nest: {
        '& i': {
            position: 'absolute',
            bottom: '32%',
            right: '3%'
        }
    }
}, media({ maxWidth: '600px' }, {
    width: '80%'
}));

export const searchInputStyle = style({
    color: '#212121',
    width: '100%',
    margin: '5px auto',
    fontSize: '18px',
    padding: '5px',
    borderRadius: 0,
    border: '2px solid #212121'
});

export const searchedSongRowStyle = style({
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    margin: '0 auto',
    textAlign: 'left',
    padding: '10px',
    cursor: 'pointer',
    $nest: {
        '&:nth-child(odd)': {
            backgroundColor: '#EAEAEA'
        },
        '&:hover': {
            backgroundColor: '#CCCCCC'
        }
    }
}, media({ maxWidth: '600px' }, {
    width: '95%',
    padding: '5px'
}));

export const selectedSearchedSongRowStyle = style({
    backgroundColor: `${ACCENT_COLOR} !important`
});

export const srSubmitStyle = style({
    border: 'none',
    backgroundColor: PRIMARY_COLOR,
    borderRadius: '5px',
    color: '#EAEAEA',
    fontWeight: 'bold',
    transition: '0.3s ease',
    width: '100px',
    height: '50px',
    margin: '5px auto',
    fontSize: '16px',
    cursor: 'pointer'
});

export const requestListStyle = style({
    margin: '20px auto',
    backgroundColor: '#fafafa',
    width: '35vw',
    maxHeight: '500px',
    overflowY: 'scroll'
}, media({ maxWidth: '600px' }, {
    width: '100%',
    maxHeight: '325px'
}));

export const requestListListStyle = style({
    margin: '0 auto',
    listStyleType: 'none'
});

export const srInfoStyle = style({
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    padding: '8px'
}, media({ maxWidth: '600px' }, {
    padding: '5px'
}));

export const srNameStyle = style({
    fontWeight: 'bold'
}, media({ maxWidth: '600px' }, {
    fontSize: '15px'
}));

export const srArtistStyle = style({
    color: '#565656',
    fontSize: '14px'
}, media({ maxWidth: '600px' }, {
    fontSize: '13px'
}));