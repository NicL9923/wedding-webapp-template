import { style, media } from 'typestyle';

export const navMenuVisibility = style({
    display: 'none'
}, media({ maxWidth: '600px' }, {
    display: 'block'
}));

export const linkStyle = style({
    color: '#fafafa',
    textDecoration: 'none'
});