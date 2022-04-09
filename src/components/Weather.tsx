import * as React from 'react';

import {Box} from '@mui/material';

import {WeatherIcon} from './WeatherIcon';
import {SunriseSunset} from './SunriseSunset';
import {useTime} from '../hooks/useTime';
import {useWeather} from '../hooks/useWeather';

export interface IWeather {
    description: string;
    icon: number;
    sunrise: number;
    sunset: number;
    temperature: number;
}

export interface IWeatherProps {
    location: string;
    units: 'metric' | 'imperial';
}

export const Weather: React.FC<IWeatherProps> = (props: IWeatherProps) => {
    const time = useTime();
    const {
        weather,
        loadWeather,
        isError,
        isLoading,
    } = useWeather();

    React.useEffect( () => {
        (async function load() {
            await loadWeather();
        })();
    }, [loadWeather]);

    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Box sx={{
                width: '100%',
                textAlign: 'center',
                fontSize: '32px',
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <Box>Wien</Box>
                <Box>{new Date(time).toLocaleString()}</Box>
            </Box>

            <Box sx={{
                width: '100%',
                textAlign: 'center',
                fontSize: '42px',
            }}>
                <WeatherIcon
                    iconId={weather.icon}
                    sunset={weather.sunset}
                    sunrise={weather.sunrise}
                />
                {weather.temperature || '-'}°C
            </Box>

            <Box>
                <SunriseSunset
                    sunrise={weather?.sunrise}
                    sunset={weather?.sunset}
                />
            </Box>
        </Box>
    );
};
