import { style } from 'typestyle';
import { url } from 'csx';

export const pageNotFoundStyle = style({
    backgroundColor: '#fcfcfc',
    backgroundImage: url(''),
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: '100vw 100vh',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
});