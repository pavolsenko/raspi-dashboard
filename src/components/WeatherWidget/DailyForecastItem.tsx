import * as React from 'react';
import { Box, Typography } from '@mui/material';

import { WeatherIcon } from '@app/components/WeatherWidget/WeatherIcon';

import {
    dailyForecastItem,
    dailyForecastTemperature,
    dailyForecastUnits,
} from './weatherStyles';

interface DailyForecastItemProps {
    day: Record<string, Record<string, unknown>>;
    dayName: string;
}

export function DailyForecastItem(props: Readonly<DailyForecastItemProps>) {
    return (
        <Box sx={dailyForecastItem}>
            <Typography variant={'body2'} color={'secondary'} component={Box}>
                {props.dayName}
            </Typography>
            <WeatherIcon
                iconId={(props.day.weather[0] as Record<string, number>).id}
                size={'42px'}
            />

            <Typography
                variant={'body2'}
                color={'secondary'}
                sx={dailyForecastTemperature}
                component={Box}
            >
                {(props.day.temp.day as number).toFixed()}
                <Typography sx={dailyForecastUnits} component={Box}>
                    °C
                </Typography>
            </Typography>
        </Box>
    );
}
