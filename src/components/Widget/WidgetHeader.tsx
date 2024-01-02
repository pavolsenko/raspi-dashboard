import { PropsWithChildren } from 'react';
import { Box } from '@mui/material';

import {
    widgetHeaderContentStyles,
    widgetHeaderStyles,
    widgetHeaderSubtitleStyles,
    widgetHeaderTitleStyles, widgetHeaderTitleWrapperStyles
} from './styles';

interface IWidgetHeaderProps extends PropsWithChildren<any> {
    align?: 'left' | 'center' | 'right';
    backgroundColor?: string;
    subtitle?: string;
    title: string;
}

export function WidgetHeader(props:IWidgetHeaderProps) {
    return (
        <Box sx={widgetHeaderStyles(props.backgroundColor)}>
            <Box sx={widgetHeaderTitleWrapperStyles(props.align)}>
                <Box>
                    <Box sx={widgetHeaderTitleStyles}>{props.title}</Box>
                    <Box sx={widgetHeaderSubtitleStyles}>{props.subtitle}</Box>
                </Box>
            </Box>
            <Box sx={widgetHeaderContentStyles}>
                {props.children}
            </Box>
        </Box>
    );
}
