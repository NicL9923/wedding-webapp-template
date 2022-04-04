import { style, media } from 'typestyle';
import { PRIMARY_COLOR } from './StyleConstants';

export const navVisibility = style({}, media({ maxWidth: '600px' }, {
    display: 'none' // Hide this if on mobile and show NavMenu (hamburger nav) instead
}));

export const navbarStyle = style({
    backgroundColor: '#FFFFFF',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto',
    textAlign: 'center',
    listStyleType: 'none',
    justifyContent: 'center',
    alignContent: 'center',
    height: '50px',
    overflow: 'hidden'
}, media({ maxWidth: '600px' }, {
    gridTemplateColumns: 'auto',
    height: 'auto'
}));

export const navLiStyle = style({},
    media({ maxWidth: '600px' }, {
        margin: '15px'
    })
);

export const navLinkStyle = style({
    textDecoration: 'none',
    transition: '0.5s ease',
    width: '100%',
    height: '100%',
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
    padding: '18px',
    $nest: {
        '&:hover': {
            backgroundColor: '#EAEAEA'
        }
    }
}, media({ maxWidth: '600px' }, {
    padding: 0
}));