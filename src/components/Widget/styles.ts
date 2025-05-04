import { SxProps, Theme } from '@mui/material';

export const errorStyles: SxProps = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
};

export const widgetStyles = (theme: Theme): SxProps => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: '#292b2d',
    color: theme.palette.primary.main,
});

export const antiBurnStyles: SxProps = {
    position: 'fixed',
    left: '0',
    top: '0',
    width: '100%',
    height: '150px',
};

export const dividerStyles: SxProps = {
    backgroundColor: '#171a1c',
    height: '3px',
    width: '100%',
};
