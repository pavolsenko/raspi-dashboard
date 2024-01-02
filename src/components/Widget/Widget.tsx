import { PropsWithChildren } from 'react';
import { Box } from '@mui/material';

import { widgetStyles } from './styles';

export interface IWidgetProps extends PropsWithChildren {
    headerBackgroundColor?: string;
}

export function Widget(props: IWidgetProps) {
    return (
        <Box sx={widgetStyles}>
            {props.children}
        </Box>
    )
}