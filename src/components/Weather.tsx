import * as React from 'react';
import axios from 'axios';

import {Typography} from '@mui/material';

export interface IWeather {
    description: string;
    temperature: string;
}

export interface IWeatherProps {
    location: string;
    units: 'metric' | 'imperial';
}

export const Weather: React.FC<IWeatherProps> = (props: IWeatherProps) => {
    const [weather, setWeather] = React.useState<IWeather>();

    React.useEffect(() => {
        (async () => {
            const result = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
                params: {
                    appId: process.env.REACT_APP_API_KEY,
                    q: props.location,
                    units: props.units || 'metric',
                },
            });
            setWeather({
                description: result.data.weather[0].main,
                temperature: result.data.main.temp,
            });
        })();
    }, [props.location, props.units, setWeather]);

    return (
        <div>
            <Typography variant={'h2'} component={'div'}>
                {weather?.temperature || '-'}°C
            </Typography>

            <Typography variant={'h3'} component={'div'}>
                {weather?.description || '-'}
            </Typography>
        </div>
    );
};
