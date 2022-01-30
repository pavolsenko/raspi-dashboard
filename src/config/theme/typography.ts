import {Palette} from '@mui/material';
import {TypographyOptions} from '@mui/material/styles/createTypography';

export const typography = (palette: Palette): TypographyOptions => ({
    h1: {
        color: palette.secondary.main,
        fontWeight: 500,
        fontSize: '5rem',
        letterSpacing: 0,
    },
    h2: {
        color: palette.secondary.main,
        fontWeight: 500,
        fontSize: '3rem',
    },
    h3: {
        color: palette.secondary.main,
        fontWeight: 500,
        fontSize: '2.7rem',
    },
    h4: {
        color: palette.secondary.main,
        fontWeight: 500,
        fontSize: '2.2rem',
    },
    h5: {
        color: palette.secondary.main,
        fontWeight: 500,
        fontSize: '2rem',
    },
    h6: {
        color: palette.secondary.main,
        fontWeight: 500,
        fontSize: '1.5rem',
    },
    button: {
        color: palette.secondary.main,
        fontSize: '0.9rem',
    },
});
