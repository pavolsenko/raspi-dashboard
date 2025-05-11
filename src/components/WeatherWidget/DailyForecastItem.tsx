import * as React from 'react';
import { Box, Typography } from '@mui/material';

import { WeatherIcon } from './WeatherIcon';

import {
    dailyForecastItem,
    dailyForecastTemperature,
    dailyForecastUnits,
} from './styles';

interface IDailyForecastItemProps {
    day: Record<string, any>;
    dayName: string;
}

export function DailyForecastItem(props: IDailyForecastItemProps) {
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
