import * as React from 'react';

import { Box, Typography, useTheme } from '@mui/material';
import { useDateTime } from '../../hooks/useDateTime';
import { dailyForecastItem } from './styles';

import { WeatherIcon } from './WeatherIcon';

interface IDailyForecastItemProps {
    day: Record<string, any>;
    index: number;
}

export const DailyForecastItem: React.FC<IDailyForecastItemProps> = (
    props: IDailyForecastItemProps,
) => {
    const theme = useTheme();
    const dateTime = useDateTime();
    const date = new Date().setDate(dateTime.getDate() + props.index);

    return (
        <Box sx={dailyForecastItem(theme)}>
            <Typography variant={'body2'} color={'secondary'} component={Box}>
                {new Date(date)
                    .toLocaleDateString('default', { weekday: 'long' })
                    .substring(0, 3)}
            </Typography>
            <WeatherIcon iconId={props.day.weather[0].id} size={'52x'} />

            <Typography variant={'body2'} color={'secondary'}>
                {Math.floor(props.day.temp.day)}°C
            </Typography>
        </Box>
    );
};
