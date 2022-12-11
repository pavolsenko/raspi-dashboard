import * as React from 'react';

import {Box} from '@mui/material';

import {getDayOfTheWeek} from '../../helpers/timeHelpers';
import {WeatherIcon} from './WeatherIcon';
import {Thermometer} from './Thermometer';

interface IDailyForecastItemProps {
    day: Record<string, any>;
    lowerLimit: number;
    higherLimit: number;
}

export const DailyForecastItem: React.FC<IDailyForecastItemProps> = (props: IDailyForecastItemProps) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 16px',
        }}>
            <Box sx={{
                width: '20px',
                fontSize: '18px',
            }}>
                {getDayOfTheWeek(new Date(props.day.dt * 1000).getDay()).substring(0, 3)}
            </Box>

            <Box sx={{display: 'flex', marginLeft: '8px'}}>
                <WeatherIcon
                    iconId={props.day.weather[0].id}
                    size={'42px'}
                />

                <Box sx={{
                    fontSize: '32px',
                    marginLeft: '8px',
                }}>
                    {Math.floor(props.day.temp.day)}
                </Box>

                <Box sx={{marginTop: '4px'}}>°C</Box>
            </Box>

            <Thermometer
                low={Math.floor(props.day.temp.min)}
                high={Math.ceil(props.day.temp.max)}
                lowerLimit={props.lowerLimit}
                higherLimit={props.higherLimit}
            />
        </Box>
    );
};
