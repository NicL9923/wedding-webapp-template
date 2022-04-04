import { style, media } from 'typestyle';
import { ACCENT_COLOR, PRIMARY_COLOR } from './StyleConstants';

export const adminLoginPageStyle = style({
    backgroundColor: '#212121',
    textAlign: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center'
});

export const adminLoginFormStyle = style({
    display: 'flex',
    flexDirection: 'column',
    width: '20%',
    margin: '0 auto',
    textAlign: 'left'
}, media({ maxWidth: '600px' }, {
    width: '95%',
    textAlign: 'center'
}));

export const adminLoginLabelStyle = style({
    color: ACCENT_COLOR,
    fontSize: '24px',
    fontWeight: 'bold',
    display: 'block'
});

export const adminLoginInputStyle = style({
    border: 'none',
    borderBottom: `3px solid ${PRIMARY_COLOR}`,
    backgroundColor: '#212121',
    color: '#EAEAEA',
    fontSize: '20px',
    display: 'block',
    margin: '10px 0',
    transition: '0.3s ease',
    $nest: {
        '&:focus': {
            borderColor: ACCENT_COLOR
        }
    }
}, media({ maxWidth: '600px' }, {
    margin: '10px auto',
    width: '100%'
}));

export const adminLoginSubmitStyle = style({
    backgroundColor: PRIMARY_COLOR,
    border: 'none',
    color: 'white',
    padding: '8px 16px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    width: '100px',
    cursor: 'pointer'
}, media({ maxWidth: '600px' }, {
    margin: '0 auto'
}));

export const adminManagementPageStyle = style({
    backgroundColor: '#EAEAEA',
    textAlign: 'center'
});

export const adminPortalHeaderStyle = style({
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
    fontSize: '48px'
});

export const rsvpListContainerStyle = style({
    backgroundColor: '#FAFAFA',
    width: '35vw',
    margin: '20px auto',
    padding: '10px'
}, media({ maxWidth: '600px' }, {
    width: '90%'
}));

export const rsvpListStyle = style({
    margin: '20px auto',
    backgroundColor: '#FAFAFA',
    width: '35vw',
    maxHeight: '500px',
    overflowY: 'scroll'
}, media({ maxWidth: '600px' }, {
    width: '100%',
    maxHeight: '325px'
}));

export const rsvpListHeaderStyle = style({
    fontSize: '28px',
    color: '#212121',
    fontWeight: 'bold'
});

export const rsvpListListStyle = style({
    margin: '0 auto'
});

export const rsvpListItemStyle = style({
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    margin: '0 auto',
    textAlign: 'center',
    padding: '10px',
    $nest: {
        '&:nth-child(odd)': {
            backgroundColor: '#EAEAEA'
        }
    }
});

export const rsvpListItemInfoStyle = style({
    margin: '5px auto'
});

export const rsvpListItemContactStyle = style({
    marginTop: '12px',
    fontWeight: 'bold'
});

export const rsvpListItemAttendingStyle = style({
    fontWeight: 'bold'
});

export const rsvpListItemSubmittedStyle = style({
    fontWeight: 'bold'
}, media({ maxWidth: '600px' }, {
    fontSize: '12px'
}));

export const rsvpListItemSpanStyle = style({
    fontWeight: 'normal'
});

export const rsvpListItemIconsStyle = style({
    margin: '5px',
    $nest: {
        '& i:hover': {
            cursor: 'pointer'
        }
    }
});

export const editRsvpPopupBoxStyle = style({
    position: 'fixed',
    zIndex: '1',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '600px',
    overflow: 'auto',
    padding: '15px 0',
    backgroundColor: ACCENT_COLOR,
    boxShadow: '3px 4px 4px 3px #212121',
    textAlign: 'center'
});

export const editRsvpHeaderStyle = style({
    fontWeight: 'bold',
    fontSize: '32px'
});

export const editRsvpSubheaderStyle = style({
    fontSize: '12px',
    marginBottom: '10px'
});

export const editRsvpAttendingHeaderStyle = style({
    fontWeight: 'bold',
    fontSize: '20px'
});

export const editRsvpAttendingInputsStyle = style({
    margin: '10px auto'
});

export const editDeleteAttendeeStyle = style({
    padding: '5px 0',
    cursor: 'pointer'
});

export const editRsvpAttendingInputStyle = style({
    fontSize: '15px',
    display: 'inline-block',
    margin: '3px auto',
    outline: '1px solid #212121', /*Outline used here to fix padding pushing background outside border */
    border: '1px solid #212121',
    boxSizing: 'border-box',
    padding: '5px',
    transition: '0.2s ease',
    $nest: {
        '&:focus': {
            borderColor: '#999999'
        }
    }
});

export const editRsvpSelectStyle = style({
    padding: '3px',
    fontSize: '15px',
    margin: '5px',
    boxSizing: 'border-box'
});

export const editRsvpButtonsStyle = style({
    margin: '15px',
    marginTop: '25px'
});

export const editRsvpCancelAndDoneButtonStyle = style({
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#212121',
    color: '#EAEAEA',
    border: 'none',
    margin: '0 8px',
    transition: '0.3s ease',
    cursor: 'pointer',
    $nest: {
        '&:hover': {
            backgroundColor: '#505050'
        }
    }
});

export const editRsvpAddAttendeeButtonStyle = style({
    marginBottom: '20px',
    padding: '5px',
    fontSize: '14px',
    backgroundColor: '#212121',
    color: '#EAEAEA',
    border: 'none',
    transition: '0.3s ease',
    $nest: {
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#505050'
        }
    }
});

export const editRsvpContactNumberStyle = style({
    marginBottom: '20px'
});

export const rsvpActionsStyle = style({
    display: 'flex',
    flexDirection: 'row'
});

export const rsvpReportButtonStyle = style({
    backgroundColor: PRIMARY_COLOR,
    border: 'none',
    color: '#FAFAFA',
    fontWeight: 'bold',
    padding: '10px',
    margin: '5px auto',
    fontSize: '16px',
    cursor: 'pointer'
});