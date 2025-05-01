import { PropsWithChildren } from 'react';
import { Box, useTheme } from '@mui/material';

import { widgetStyles } from './styles';

export function Widget(props: PropsWithChildren) {
    const theme = useTheme();

    return <Box sx={widgetStyles(theme)}>{props.children}</Box>;
}
