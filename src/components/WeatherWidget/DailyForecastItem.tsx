import * as React from 'react';

import {Box} from '@mui/material';
import Icon from '@mdi/react';

interface IDailyForecastItemProps {
    icon: string;
    iconRotation?: number;
    units: string;
    value: string;
}

export const DailyForecastItem: React.FC<IDailyForecastItemProps> = (props: IDailyForecastItemProps) => {
    return (
        <Box sx={{
            display: 'flex',
            margin: '4px',
            width: '110px',
        }}>
            <Icon
                path={props.icon}
                rotate={props.iconRotation}
                size={'36px'}
            />
            <Box sx={{
                display: 'flex',
                marginLeft: '8px',
            }}>
                <Box sx={{fontSize: '28px'}}>{props.value}</Box>
                <Box sx={{marginTop: '4px'}}>{props.units}</Box>
            </Box>
        </Box>
    );
}
