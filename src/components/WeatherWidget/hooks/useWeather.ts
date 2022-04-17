import * as React from 'react';
import axios from 'axios';

import {IWeather, TUnits} from '../interfaces';
import {AppConfig} from '../../../config/appConfig';

export const useWeather = (
    units?: TUnits,
) => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [isError, setIsError] = React.useState<boolean>(false);

    const [weather, setWeather] = React.useState<IWeather | undefined>();

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
            ...result.data.current,
            daily: result.data.daily.slice(0, 5),
            pop: result.data.hourly[0].pop,
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
