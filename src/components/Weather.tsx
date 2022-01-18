import * as React from 'react';
import axios from 'axios';

import {Box} from '@mui/material';
import {WeatherIcon} from './WeatherIcon';

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
                sunrise: result.data.current.temp.sunrise * 1000,
                sunset: result.data.current.temp.sunset * 1000,
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
            }}>
                Wien
            </Box>

            <Box sx={{
                width: '100%',
                textAlign: 'center',
                fontSize: '42px',
            }}>
                {weather.temperature || '-'}°C
            </Box>

            <Box>
                <WeatherIcon
                    iconId={weather.icon}
                    sunset={weather.sunset}
                    sunrise={weather.sunrise}
                />
            </Box>

        </Box>
    );
};
