import { SxProps, Theme } from '@mui/material';

import { DISPLAY_HEIGHT, DISPLAY_WIDTH } from './config/appConfig';

export const appContainerStyles = (theme: Theme): SxProps => ({
    width: DISPLAY_WIDTH,
    height: DISPLAY_HEIGHT,
    background: '#000000',
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    fontFamily: 'Roboto',
    fontWeight: 400,
});

export const appWidgetBoxStyles: SxProps = {
    width: '415px',
    height: DISPLAY_HEIGHT - 5,
};
