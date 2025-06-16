import * as React from 'react';
import { Box, Typography } from '@mui/material';

import { WeatherIcon } from '@app/components/WeatherWidget/WeatherIcon';

import {
    dailyForecastItem,
    dailyForecastTemperature,
    dailyForecastUnits,
} from './weatherStyles';

interface DailyForecastItemProps {
    day: Record<string, any>;
    dayName: string;
}

export function DailyForecastItem(props: Readonly<DailyForecastItemProps>) {
    return (
        <Box sx={dailyForecastItem}>
            <Typography variant={'body2'} color={'secondary'} component={Box}>
                {props.dayName}
            </Typography>
            <WeatherIcon iconId={props.day.weather[0].id} size={'42px'} />

            <Typography
                variant={'body2'}
                color={'secondary'}
                sx={dailyForecastTemperature}
                component={Box}
            >
                {props.day.temp.day.toFixed()}
                <Typography sx={dailyForecastUnits} component={Box}>
                    °C
                </Typography>
            </Typography>
        </Box>
    );
}
