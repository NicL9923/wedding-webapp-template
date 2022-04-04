import { style, media } from 'typestyle';
import { ACCENT_COLOR, PRIMARY_COLOR } from './StyleConstants';

export const rsvpPageStyle = style({
    textAlign: 'center'
});

export const goBackStyle = style({
    fontSize: '18px',
    display: 'block',
    padding: '10px',
    fontWeight: 'bold'
});

export const formContainerStyle = style({
    //backgroundColor: '#fafafa',
    width: '35vw',
    margin: '20px auto'
    //border: `4px double ${PRIMARY_COLOR}`
}, media({ maxWidth: '600px' }, {
    width: '95vw'
}));

export const formHeaderStyle = style({
    color: PRIMARY_COLOR,
    margin: '5px auto',
    fontWeight: 'bold',
    fontSize: '48px'
});

export const formSubheaderStyle = style({
    fontSize: '12px'
});

export const fullNamesHeaderStyle = style({
    padding: '10px',
    fontSize: 'large',
    fontWeight: 'bold',
    paddingBottom: '2px',
    marginTop: '30px'
});

export const fullNamesDescriptionStyle = style({
    width: '80%',
    margin: '5px auto',
    fontSize: '14px'
});

export const namesInputStyle = style({
    padding: '3px',
    fontSize: '16px',
    height: '20px',
    margin: '5px 8px'
});

export const removeGuessIconStyle = style({
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)'
});

export const addGuestButtonStyle = style({
    padding: '2px',
    marginTop: '5px',
    cursor: 'pointer'
});

export const contactNumberHeaderStyle = style({
    paddingTop: '10px',
    fontSize: 'large',
    fontWeight: 'bold',
    marginTop: '30px'
});

export const contactNumberSubheaderStyle = style({
    fontSize: 'x-small',
    paddingBottom: '2px'
});

export const contactNumberInputStyle = style({
    width: '30%',
    height: '25px',
    padding: '3px',
    fontSize: '16px'
}, media({ maxWidth: '600px' }, {
    width: '90%'
}));

export const attendingQuestionStyle = style({
    padding: '10px',
    fontSize: 'large',
    fontWeight: 'bold',
    paddingBottom: '2px',
    marginTop: '30px'
});

export const attendingRadioDivStyle = style({
    margin: '0 auto',
    textAlign: 'left',
    width: '80%'
});

export const attendingRadioButtonStyle = style({
    display: 'block',
    padding: '3px',
    margin: '6px 0',
    fontSize: '16px'
});

export const attendingYesNoInputsStyle = style({
    marginRight: '10px'
});

export const foodChoicesHeaderStyle = style({
    fontSize: 'large',
    fontWeight: 'bold',
    padding: '10px',
    paddingBottom: '2px',
    marginTop: '30px'
});

export const personNameStyle = style({
    fontWeight: 'bold',
    color: PRIMARY_COLOR
});

export const foodRadioContainerStyle = style({
    width: '40%',
    margin: '0 auto',
    marginBottom: '10px'
}, media({ maxWidth: '600px' }, {
    width: '90%'
}));

export const foodRadioStyle = style({
    display: 'block',
    padding: '3px',
    textAlign: 'left',
    fontSize: '16px'
});

export const foodRadioChoiceStyle = style({
    marginRight: '10px'
});

export const inputGroupStyle = style({

});

export const submitButtonStyle = style({
    padding: '10px',
    border: `2px solid ${PRIMARY_COLOR}`,
    marginTop: '30px',
    marginBottom: '15px',
    transition: '0.3s ease',
    fontSize: '18px',
    borderRadius: '2px',
    backgroundColor: '#fafafa',
    cursor: 'pointer',
    $nest: {
        '&:hover': {
            backgroundColor: ACCENT_COLOR
        }
    }
});

export const submittedRsvpContainerStyle = style({
    backgroundColor: 'lightgreen',
    padding: '15px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    margin: '0 auto'
}, media({ maxWidth: '600px' }, {
    width: '90%'
}));

export const rsvpThanksStyle = style({
    fontSize: '32px',
    fontWeight: 'bold'
});