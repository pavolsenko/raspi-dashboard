import * as React from 'react';

import {Box} from '@mui/material';

import {WeatherIcon} from './WeatherIcon';
import {getDayOfTheWeek} from './helpers/timeHelpers';

interface IForecastProps {
    days?: Record<string, any>[];
}

export const Forecast: React.FC<IForecastProps> = (props: IForecastProps) => {
    const renderDays = (): React.ReactNode[] => {
        if (!props.days) {
            return [];
        }

        const result: React.ReactNode[] = [];

        props.days.forEach((day: Record<string, any>, index: number) => {
            result.push(
                <Box
                    key={index.toString()}
                    sx={{
                        margin: '8px 16px',
                        borderBottom: '1px solid #cccccc',
                    }}
                >
                    <Box sx={{
                        fontSize: '12px',
                    }}>
                        {getDayOfTheWeek(new Date(day.dt * 1000).getDay())},&nbsp;
                        {new Date(day.dt * 1000).toLocaleDateString()}
                    </Box>

                    <Box sx={{display: 'flex'}}>
                        <Box sx={{margin: '4px'}}>
                            <WeatherIcon
                                iconId={day.weather[0].id}
                                size={'36px'}
                            />
                        </Box>
                        <Box sx={{display: 'flex'}}>
                            <Box sx={{fontSize: '28px'}}>{day.temp.day.toFixed()}</Box>
                            <Box sx={{marginTop: '4px'}}>°C</Box>
                        </Box>
                        <Box>{day.pop * 100}%</Box>
                    </Box>
                </Box>
            );
        });

        return result;
    };

    return (
        <>
            {renderDays()}
        </>
    );
};
