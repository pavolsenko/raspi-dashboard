import { PropsWithChildren } from 'react';
import { Box, useTheme } from '@mui/material';

import { widgetStyles } from '@app/components/Widget/antiBurnStyles';

export function Widget(props: Readonly<PropsWithChildren>) {
    const theme = useTheme();

    return <Box sx={widgetStyles(theme)}>{props.children}</Box>;
}
