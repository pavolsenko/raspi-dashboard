import * as React from 'react';
import axios from 'axios';

import {ILatLon, IWeather, TUnits} from '../interfaces';
import {AppConfig} from '../../../config/appConfig';

export const useWeather = (location: ILatLon, units?: TUnits) => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [isError, setIsError] = React.useState<boolean>(false);
    const [weather, setWeather] = React.useState<IWeather | undefined>();

    const getHourlyForecast = (hourly: Record<string, any>[]): Record<string, any>[] => {
        return hourly
            .slice(2, 12)
            .filter((item: Record<string, any>, index: number) => index % 2 === 0);
    }

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
            daily: result.data.daily.slice(1, 5),
            hourly: getHourlyForecast(result.data.hourly),
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
