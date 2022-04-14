import * as React from 'react';

import {Box} from '@mui/material';
import {WeatherIcon} from './WeatherIcon';

interface IForecastProps {
    days?: Record<string, any>[];
}

export const Forecast: React.FC<IForecastProps> = (props: IForecastProps) => {
    const renderDays = (): React.ReactNode[] => {
        if (!props.days) {
            return [];
        }

        const result: React.ReactNode[] = [];

        props.days.forEach((day: Record<string, any>) => {
            result.push(
                <Box>
                    <WeatherIcon iconId={day.weather[0].id}/>
                    <Box>{day.temp.day}°C</Box>
                    <Box>{day.pop * 100}%</Box>
                </Box>
            );
        });

        return result;
    }

    return (
        <>
            {renderDays()}
        </>
    );
}
