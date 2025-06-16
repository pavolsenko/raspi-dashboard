import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import { Error } from '@app/components/Widget/Error';
import { DEFAULT_FONT_SIZE } from '@app/helpers/themeHelper';
import { DailyForecast } from '@app/components/WeatherWidget/DailyForecast';
import { WeatherIcon } from '@app/components/WeatherWidget/WeatherIcon';
import { Units, useWeather } from '@app/hooks/useWeather';
import { appConfig } from '@app/config/appConfig';
import { CurrentTemperature } from '@app/components/WeatherWidget/CurrentTemperature';
import { Widget } from '@app/components/Widget/Widget';
import { DEFAULT_LOCATION } from '@app/config/weatherConfig';

import { currentTemperatureBoxStyles } from './weatherStyles';

export interface WeatherProps {
    units?: Units;
}

export function WeatherWidget(props: Readonly<WeatherProps>) {
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
            appConfig.defaultUpdateInterval,
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
