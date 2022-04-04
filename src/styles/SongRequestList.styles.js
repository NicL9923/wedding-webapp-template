import { style, media } from 'typestyle';
import { PRIMARY_COLOR } from './StyleConstants';

export const requestListContainerStyle = style({
    backgroundColor: '#fafafa',
    width: '35vw',
    margin: '20px auto',
    padding: '10px',
    position: 'relative'
}, media({ maxWidth: '600px' }, {
    width: '90%'
}));

export const requestListHeaderStyle = style({
    fontSize: '28px',
    fontWeight: 'bold'
});

export const refreshIconStyle = style({
    position: 'absolute',
    top: '4%',
    right: '4%',
    cursor: 'pointer'
}, media({ maxWidth: '600px' }, {
    right: '5%'
}));

export const songRequestRowStyle = style({
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    margin: '0 auto',
    textAlign: 'left',
    padding: '10px',
    $nest: {
        '&:nth-child(odd)': {
            backgroundColor: '#EAEAEA'
        }
    }
}, media({ maxWidth: '600px' }, {
    width: '95%',
    padding: '5px'
}));

export const srLikeContainerStyle = style({
    marginLeft: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    $nest: {
        '& i:hover': {
            cursor: 'pointer'
        },
        '& p': {
            fontSize: '14px'
        }
    }
});

export const sortByButtonStyle = style({
    border: 'none',
    backgroundColor: PRIMARY_COLOR,
    borderRadius: '5px',
    color: '#EAEAEA',
    fontWeight: 'bold',
    transition: '0.3s ease',
    width: '150px',
    height: '50px',
    margin: '5px auto',
    fontSize: '16px',
    cursor: 'pointer'
});