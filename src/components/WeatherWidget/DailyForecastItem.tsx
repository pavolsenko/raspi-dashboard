import * as React from 'react';

import { Box, Typography } from '@mui/material';
import { useDateTime } from '../../hooks/useDateTime';
import {
    dailyForecastItem,
    dailyForecastTemperature,
    dailyForecastUnits,
} from './styles';

import { WeatherIcon } from './WeatherIcon';

interface IDailyForecastItemProps {
    day: Record<string, any>;
    index: number;
}

export const DailyForecastItem: React.FC<IDailyForecastItemProps> = (
    props: IDailyForecastItemProps,
) => {
    const dateTime = useDateTime();
    const date = new Date().setDate(dateTime.getDate() + props.index + 1);

    return (
        <Box sx={dailyForecastItem}>
            <Typography variant={'body2'} color={'secondary'} component={Box}>
                {new Date(date)
                    .toLocaleDateString('default', { weekday: 'long' })
                    .substring(0, 3)}
            </Typography>
            <WeatherIcon iconId={props.day.weather[0].id} size={'42px'} />

            <Typography
                variant={'body2'}
                color={'secondary'}
                sx={dailyForecastTemperature}
                component={Box}
            >
                {Math.floor(props.day.temp.day)}
                <Typography sx={dailyForecastUnits} component={Box}>
                    °C
                </Typography>
            </Typography>
        </Box>
    );
};
