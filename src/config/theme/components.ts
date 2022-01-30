import {Components, CSSInterpolation} from '@mui/material';

import {shadows} from './shadows';

const outlined: CSSInterpolation = {
    border: '1px solid transparent',
    boxShadow: shadows[3],
    fontWeight: 'bold',
    '&:hover': {
        border: '1px solid transparent',
        boxShadow: shadows[3],
    },
};

export const components: Components = {
    MuiButton: {
        styleOverrides: {
            root: {
                borderRadius: '5px',
                boxShadow: shadows[2],
                fontWeight: 'bold',
                lineHeight: 1.75,
                '&:hover': {
                    boxShadow: shadows[2],
                },
            },
            outlined,
            containedSecondary: {
                fontWeight: 'normal',
            },
        },
    },
    MuiChip: {
        styleOverrides: {
            root: {
                borderRadius: '6px',
                boxShadow: shadows[2],
                textTransform: 'uppercase',
            },
            outlined,
        },
    },
};
