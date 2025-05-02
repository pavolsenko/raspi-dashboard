import { SxProps, Theme } from '@mui/material';

import { DISPLAY_HEIGHT, DISPLAY_WIDTH } from './helpers/themeHelper';

export const appContainerStyles = (theme: Theme): SxProps => ({
    width: DISPLAY_WIDTH,
    height: DISPLAY_HEIGHT,
    background: '#171a1c',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    gap: theme.spacing(4),
    padding: theme.spacing(4),
});
