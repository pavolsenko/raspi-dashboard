import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import { Error } from '../Widget/Error';
import { DEFAULT_FONT_SIZE } from '../../helpers/themeHelper';
import { DailyForecast } from './DailyForecast';
import { WeatherIcon } from './WeatherIcon';
import { useWeather } from '../../hooks/useWeather';
import { AppConfig } from '../../config/appConfig';
import { CurrentTemperature } from './CurrentTemperature';
import { Widget } from '../Widget/Widget';
import { DEFAULT_LOCATION } from '../../config/weatherConfig';

import { currentTemperatureBoxStyles } from './styles';

export interface IWeatherProps {
    units?: 'metric' | 'imperial';
}

export function WeatherWidget(props: IWeatherProps) {
    const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);

    const { weather, loadWeather, isError } = useWeather(
        DEFAULT_LOCATION,
        props.units,
    );

    useEffect(() => {
        if (isInitialLoad) {
            loadWeather();
            setIsInitialLoad(false);
        }

        const interval = setInterval(
            loadWeather,
            AppConfig.defaultUpdateInterval,
        );

        return () => clearInterval(interval);
    }, [loadWeather, isInitialLoad, setIsInitialLoad]);

    if (isError || !weather) {
        return <Error />;
    }

    return (
        <Widget>
            <Box sx={currentTemperatureBoxStyles}>
                <WeatherIcon
                    iconId={weather?.icon}
                    sunsetMs={weather?.sunset}
                    sunriseMs={weather?.sunrise}
                    size={DEFAULT_FONT_SIZE}
                />
                <CurrentTemperature value={weather?.temp} />
            </Box>
            <DailyForecast days={weather?.daily} />
        </Widget>
    );
}
