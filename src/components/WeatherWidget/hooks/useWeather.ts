import * as React from 'react';
import axios from 'axios';

import {IWeather, TUnits} from '../interfaces';
import {AppConfig} from '../../../config/appConfig';

export const useWeather = (
    units?: TUnits,
) => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [isError, setIsError] = React.useState<boolean>(false);

    const [weather, setWeather] = React.useState<IWeather>({
        description: '',
        icon: 0,
        sunrise: 0,
        sunset: 0,
        temperature: 0,
    });

    const loadWeather = async (): Promise<void> => {
        setIsError(false);
        setIsLoading(true);

        let result: any;
        try {
            result = await axios.get(AppConfig.openWeatherApiEndpoint, {
                params: {
                    appId: AppConfig.openWeatherAppId,
                    lat: 48.2085,
                    lon: 16.3721,
                    units: units || 'metric',
                },
            });
        } catch (Error) {
            setIsError(true);
            setIsLoading(false);
            return;
        }

        setWeather({
            description: '',
            temperature: result.data.current.temp,
            icon: result.data.current.weather[0].id,
            sunrise: result.data.current.sunrise * 1000,
            sunset: result.data.current.sunset * 1000,
        });

        setIsLoading(false);
    };

    return {
        weather,
        loadWeather,
        isLoading,
        isError,
    };
};
