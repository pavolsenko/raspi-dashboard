import {SxProps} from '@mui/material';

export const countdownsWrapperStyles: SxProps = {
    display: 'flex',
    fontSize: '22px',
}

export const countdownBlinkingStyles: SxProps = {
    animation: '1s blink infinite',
    fontSize: '12px',
    marginTop: '4px',

    '@keyframes blink': {
        '50%': {opacity: 0},
    },
}

export const countdownStyles: SxProps = {
    width: '38px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export const countdownErrorStyles: SxProps = {
    width: '72px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}