import * as React from 'react'

import {Box} from '@mui/material';

import {useDateTime} from './WeatherWidget/hooks/useDateTime';
import {normalizeTime} from './WeatherWidget/helpers/timeHelpers';

export const Time: React.FC = () => {
    const dateTime = useDateTime();

    return (
        <Box sx={{textAlign: 'right'}}>
            <Box sx={{fontSize: '26px', lineHeight: '22px'}}>{normalizeTime(dateTime)}</Box>
            <Box sx={{fontSize: '14px'}}>{dateTime.toLocaleDateString()}</Box>
        </Box>
    );
};
