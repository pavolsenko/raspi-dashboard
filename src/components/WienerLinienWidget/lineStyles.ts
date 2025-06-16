import { SxProps } from '@mui/material';

export const countdownsWrapperStyles: SxProps = {
    display: 'flex',
    gap: 3,
    marginLeft: 5,
};

export const countdownBlinkingStyles: SxProps = {
    animation: '1s blink infinite',
    fontSize: '12px',
    marginTop: '4px',

    '@keyframes blink': {
        '50%': { opacity: 0 },
    },
};

export const countdownNumberStyles: SxProps = {
    width: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

export const countdownErrorStyles: SxProps = {
    width: '72px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

export const lineNumberStyles = (backgroundColor: string): SxProps => ({
    width: '72px',
    height: '72px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: backgroundColor,
    boxShadow: '0 0 12px #222222',
    borderRadius: '16px',
    marginRight: 2,
});

export const lineStyles: SxProps = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 1,
};

export const lineNameStyles: SxProps = {
    display: 'flex',
    alignItems: 'center',
};
