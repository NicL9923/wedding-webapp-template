import { style, media } from 'typestyle';
import { url } from 'csx';
import { ACCENT_COLOR, PRIMARY_COLOR } from './StyleConstants';

export const detailsPageStyle = style({
    backgroundColor: '#EAEAEA'
});

export const detailsHeaderStyle = style({
    backgroundColor: '#212121',
    backgroundImage: url(''),
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '55% 140%',
    height: '30vh'
}, media({ maxWidth: 600 }, { 
    height: '35vh',
    backgroundSize: 'cover'
}));

export const headerInsideStyle = style({
    width: '50%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
}, media({ maxWidth: 600 }, { 
    width: '100%'
}));

export const headerPartParentStyle = style({
    display: 'inline-block',
    color: '#EAEAEA'
});

export const detailsHeaderPartStyle = style({
    color: PRIMARY_COLOR,
    fontSize: '64px',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadow: '2px 2px 3px black'
}, media({ maxWidth: 600 }, { 
    fontWeight: 'normal',
    fontSize: '54px'
}));

export const weddingDetailsContainerStyle = style({
    padding: '15px',
    margin: '15px auto',
    textAlign: 'center',
    width: '50%'
}, media({ maxWidth: 600 }, { 
    width: '100%',
    padding: 0,
    margin: '15px 2px'
}));

export const countdownStyle = style({
    margin: '100px',
    $nest: {
        '& *': {
            fontWeight: 'bold',
            fontSize: '32px',
            color: PRIMARY_COLOR
        }
    }
}, media({ maxWidth: 600 }, { 
    margin: '50px 5px'
}));

export const countdownHeaderStyle = style({
    fontSize: '24px',
    marginBottom: '8px'
}, media({ maxWidth: 600 }, { 
    fontSize: '24px',
    marginBottom: '8px'
}));

export const countdownTimeStyle = style({
    fontWeight: 'normal',
    color: '#212121'
}, media({ maxWidth: 600 }, { 
    fontSize: '16px'
}));

export const churchDetailsStyle = style({
    display: 'grid',
    gridTemplateColumns: '35% 35% 30%',
    height: 'auto',
    backgroundColor: '#fafafa'
}, media({ maxWidth: 600 }, { 
    gridTemplateColumns: 'auto',
    gridGap: '20px',
    padding: '5px 0'
}));

export const venueDetailsStyle = style({
    display: 'grid',
    gridTemplateColumns: '35% 35% 30%',
    height: 'auto'
}, media({ maxWidth: 600 }, { 
    gridTemplateColumns: 'auto',
    gridGap: '20px',
    padding: '5px 0'
}));

export const placeHeaderStyle = style({
    fontSize: '32px',
    fontWeight: 'bold'
}, media({ maxWidth: 600 }, { 
    padding: 0
}));

export const descriptionContainerStyle = style({
    padding: '15px',
    textAlign: 'center',
    fontSize: '20px'
}, media({ maxWidth: 600 }, { 
    textAlign: 'center',
    gridArea: 1
}));

export const imageGalleryStyle = style({
    height: 'auto',
    width: 'auto',
    margin: 0,
    padding: '20px'
}, media({ maxWidth: 600 }, { 
    width: '90vw',
    padding: 0,
    margin: 0,
    marginLeft: 'auto',
    marginRight: 'auto'
}));

export const placeBriefStyle = style({
    textAlign: 'center',
    margin: '20px auto'
});

export const placeDirectionsHeaderStyle = style({
    fontSize: '24px',
    padding: '10px'
});

export const placeInfoStyle = style({
    fontSize: '18px'
});

export const detailsLineBreakStyle = style({
    backgroundColor: PRIMARY_COLOR,
    height: 0,
    padding: '1.5px 0',
    width: '60px',
    margin: '20px auto'
});

export const directionsIFrameStyle = style({
    margin: '20px'
}, media({ maxWidth: 600 }, { 
    $nest: {
        '& iframe': {
            width: '100%'
        }
    }
}));

export const weddingPartyContainer = style({
    textAlign: 'center',
    backgroundColor: '#fafafa'
});

export const wpHeaderStyle = style({
    paddingTop: '15px'
}, media({ maxWidth: '600px' }, {
    padding: '15px 0'
}));

export const wpDescriptionStyle = style({
    margin: '15px auto',
    marginTop: '5px'
}, media({ maxWidth: '600px' }, {
    width: '85%'
}));

export const placeDescriptionStyle = style({
    textAlign: 'justify',
    margin: '15px 0'
});

export const brideGroomGridStyle = style({
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    justifyContent: 'center',
    margin: '5px auto',
    columnGap: '10px',
    rowGap: '10px'
});

export const familyGridStyle = style({
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    justifyContent: 'center',
    margin: '5px auto',
    columnGap: '10px',
    rowGap: '10px'
});

export const brideFamilyGridStyle = style({
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    justifyContent: 'center',
    margin: '5px auto',
    columnGap: '10px',
    rowGap: '10px'
}, media({ maxWidth: '600px' }, {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
}));

export const groomFamilyGridStyle = style({
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    justifyContent: 'center',
    margin: '5px auto',
    columnGap: '10px',
    rowGap: '10px'
}, media({ maxWidth: '600px' }, {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
}));

export const maidHonorBestManGridStyle = style({
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    justifyContent: 'center',
    margin: '5px auto',
    columnGap: '10px',
    rowGap: '10px'
});

export const generalPeopleGridStyle = style({
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    justifyContent: 'center',
    margin: '5px auto',
    columnGap: '10px',
    rowGap: '10px'
});

export const bridesmaidsGridStyle = style({
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    direction: 'rtl',
    margin: '5px auto',
    columnGap: '10px',
    rowGap: '10px'
}, media({ maxWidth: '600px' }, {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
}));

export const groomsmenGridStyle = style({
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    justifyItems: 'stretch',
    margin: '5px auto',
    columnGap: '10px',
    rowGap: '10px'
}, media({ maxWidth: '600px' }, {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
}));

export const weddingPartyCardStyle = style({
    backgroundColor: '#212121',
    width: '200px',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    $nest: {
        '& *': {
            color: '#EAEAEA'
        }
    }
}, media({ maxWidth: '600px' }, {
    width: '170px',
    height: '250px',
    margin: '5px 0'
}));

export const cardImageStyle = style({
    borderRadius: '50%',
    height: '150px',
    width: '150px',
    border: `2px solid ${PRIMARY_COLOR}`
}, media({ maxWidth: '600px' }, {
    width: '125px',
    height: '125px'
}));

export const cardNameStyle = style({
    fontSize: '20px',
    width: '55%',
    margin: '8px 0'
}, media({ maxWidth: '600px' }, {
    width: '65%',
    margin: '8px auto'
}));

export const cardPositionStyle = style({
    fontSize: '14px',
    color: ACCENT_COLOR
});

export const cardEstStyle = style({
    fontSize: '12px'
});