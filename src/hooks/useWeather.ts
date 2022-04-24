import * as React from 'react';
import axios from 'axios';

import {AppConfig} from '../config/appConfig';
import {getHourlyForecast} from '../helpers/weatherHelpers';

export type TUnits = 'metric' | 'imperial';

export interface ILatLon {
    lat: number;
    lon: number;
}

export interface IWeather {
    daily: Record<string, any>[];
    hourly: Record<string, any>[];
    description?: string;
    humidity?: number;
    icon?: number;
    pop?: number;
    sunrise?: number;
    sunset?: number;
    temp?: number;
    wind_deg?: number;
    wind_speed?: number;
}

export interface IUseWeather {
    weather?: IWeather;
    loadWeather: () => void;
    isLoading: boolean;
    isError: boolean;
}

export const useWeather = (location: ILatLon, units?: TUnits): IUseWeather => {
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
            daily: result.data.daily.slice(1, 6),
            hourly: getHourlyForecast(result.data.hourly),
            icon: result.data.current.weather[0].iconId,
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
