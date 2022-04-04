import { style } from 'typestyle';

export const djLoginPageStyle = style({
    backgroundColor: '#212121',
    textAlign: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center'
});

export const djLoginFormStyle = style({
    display: 'flex',
    flexDirection: 'column',
    width: '20%',
    margin: '0 auto',
    textAlign: 'left'
});

export const djLoginLabelStyle = style({
    color: '#D4AF37',
    fontSize: '24px',
    fontWeight: 'bold',
    display: 'block'
});

export const djLoginInputStyle = style({
    border: 'none',
    borderBottom: '3px solid #D4AF37',
    backgroundColor: '#212121',
    color: '#EAEAEA',
    fontSize: '22px',
    display: 'block',
    margin: '10px 0',
    transition: '0.3s ease',
    $nest: {
        '&:focus': {
            borderColor: '$FFE60A'
        }
    }
});

export const djLoginSubmitStyle = style({
    backgroundColor: '#D4AF37',
    border: 'none',
    color: 'white',
    padding: '8px 16px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    width: '100px',
    cursor: 'pointer'
});

export const djPortalPageStyle = style({
    backgroundColor: '#EAEAEA',
    height: '100vh',
    textAlign: 'center'
});