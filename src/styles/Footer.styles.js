import { style } from 'typestyle';

export const footerStyle = style({
    backgroundColor: '#212121',
    color: '#EAEAEA',
    textAlign: 'center',
    padding: '50px',
    $nest: {
        '& *': {
            color: '#EAEAEA'
        }
    }
});