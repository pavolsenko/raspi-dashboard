import { SxProps, Theme } from '@mui/material';

export const departuresStyles: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    color: '#666666',
    padding: '0 16px 16px 16px',
};

export const departuresIconStyles: SxProps = {
    marginTop: '12px',
    display: 'flex',
    cursor: 'pointer',
};

export const departuresTimeStyles = (theme: Theme): SxProps => ({
    fontSize: '46px',
    marginLeft: theme.spacing(1),
});

export const countdownsWrapperStyles: SxProps = {
    display: 'flex',
    fontSize: '22px',
};

export const countdownBlinkingStyles: SxProps = {
    animation: '1s blink infinite',
    fontSize: '12px',
    marginTop: '4px',

    '@keyframes blink': {
        '50%': { opacity: 0 },
    },
};

export const countdownStyles: SxProps = {
    width: '38px',
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
