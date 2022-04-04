import { style, media } from 'typestyle';
import { url } from 'csx';

export const aboutUsPageStyle = style({
    backgroundColor: '#EAEAEA'
});

export const aboutUsHeaderStyle = style({
    backgroundColor: '#212121',
    backgroundImage: url(''),
    height: '400px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: '25% 145%'
}, media({ maxWidth: '600px' }, {
    backgroundSize: 'cover'
}));

export const ourStoryContainerStyle = style({
    width: '50%',
    margin: '50px auto'
}, media({ maxWidth: '600px' }, {
    width: '90%'
}));

export const ourStoryHeaderStyle = style({
    borderBottom: '4px solid #212121',
    padding: '10px 0',
    marginBottom: '15px',
    fontSize: '42px',
    color: '#212121'
});

export const ourStoryBodyStyle = style({
    fontSize: '18px',
    lineHeight: '24px',
    margin: '15px 0'
});

export const futurePlansContainerStyle = style({
    backgroundColor: '#fafafa',
    display: 'grid',
    gridTemplateColumns: '30% auto'
}, media({ maxWidth: '600px' }, {
    gridTemplateColumns: 'auto'
}));

export const futurePlansImageStyle = style({
    width: '100%'
});

export const futurePlansBodyStyle = style({
    display: 'grid',
    gridTemplateColumns: '65%',
    justifyContent: 'center',
    alignContent: 'center',
    margin: '50px auto'
}, media({ maxWidth: '600px' }, {
    gridTemplateColumns: '90%'
}));

export const fpBodyHeaderStyle = style({
    padding: '10px 0',
    marginBottom: '15px',
    fontSize: '36px',
    color: '#212121',
    textAlign: 'center'
});

export const fpBodyTextStyle = style({
    fontSize: '18px',
    lineHeight: '24px',
    margin: '10px 0'
});