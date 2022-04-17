import * as React from 'react';

import {Box} from '@mui/material';
import Icon from '@mdi/react';

interface IWidgetSubtitleProps {
    icon: string;
    iconRotation?: number;
    value: string;
}

export const WidgetSubtitle: React.FC<IWidgetSubtitleProps> = (props: IWidgetSubtitleProps) => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            margin: '8px',
            fontSize: '18px',
            lineHeight: '16px',
        }}>
            <Box sx={{marginRight: '4px'}}>
                <Icon
                    path={props.icon}
                    rotate={props.iconRotation}
                    size={'20px'}
                />
            </Box>
            <Box>{props.value}</Box>
        </Box>
    );
};
