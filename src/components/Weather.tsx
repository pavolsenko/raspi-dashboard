import * as React from 'react';
import axios from 'axios';

import {Box} from '@mui/material';

import {WeatherIcon} from './WeatherIcon';
import {SunriseSunset} from './SunriseSunset';

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
    const [weather, setWeather] = React.useState<IWeather>({
        description: '',
        icon: 0,
        sunrise: 0,
        sunset: 0,
        temperature: 0,
    });
    const [time, setTime] = React.useState(Date.now());

    React.useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    React.useEffect(() => {
        (async () => {
            const result = await axios.get('http://api.openweathermap.org/data/2.5/onecall', {
                params: {
                    appId: process.env.REACT_APP_API_KEY,
                    lat: 48.2085,
                    lon: 16.3721,
                    units: props.units || 'metric',
                },
            });
            setWeather({
                description: '',
                temperature: result.data.current.temp,
                icon: result.data.current.weather[0].id,
                sunrise: result.data.current.sunrise * 1000,
                sunset: result.data.current.sunset * 1000,
            });
        })();
    }, [props.location, props.units, setWeather]);

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
