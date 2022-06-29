import * as React from 'react';
import {Box} from '@mui/material';
import {WeatherIcon} from './WeatherIcon';

interface IHourlyForecastProps {
    hours?: Record<string, any>[];
    sunrise?: number;
    sunset?: number;
}

export const HourlyForecast: React.FC<IHourlyForecastProps> = (props: IHourlyForecastProps) => {
    const renderHours = (): React.ReactNode[] => {
        if (!props.hours) {
            return [];
        }

        const result: React.ReactNode[] = [];

        props.hours.forEach((hour: Record<string, any>, index: number) => {
            result.push(
                <Box key={index.toString()}>
                    <Box sx={{
                        fontSize: '12px',
                        backgroundColor: '#dddddd',
                        textAlign: 'center',
                        borderRadius: '12px',
                    }}>
                        {new Date(hour.dt * 1000).getHours()}:00
                    </Box>

                    <Box sx={{display: 'flex', padding: '4px'}}>
                        <Box sx={{margin: '4px 4px 0 0'}}>
                            <WeatherIcon
                                iconId={hour.weather[0].id}
                                size={'28px'}
                                sunriseMs={props.sunrise}
                                sunsetMs={props.sunset}
                            />
                        </Box>
                        <Box>
                            <Box sx={{fontSize: '12px'}}>{hour.temp.toFixed()}°C</Box>
                            <Box sx={{fontSize: '12px'}}>{(hour.pop * 100).toFixed()}%</Box>
                        </Box>
                    </Box>
                </Box>
            );
        });

        return result;
    };

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '16px 16px 8px 16px',
        }}>
            {renderHours()}
        </Box>
    );
}
