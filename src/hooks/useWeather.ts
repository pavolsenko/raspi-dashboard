import { ForecastDay } from '@app/interfaces/weather';
import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import { appConfig } from '@app/config/appConfig';
import {
    DAILY_FORECAST_COUNT,
    DEFAULT_LOCATION,
} from '@app/config/weatherConfig';

export type Units = 'metric' | 'imperial';

export interface LatLon {
    lat: number;
    lon: number;
}

export interface Weather {
    daily: ForecastDay[];
    hourly: Record<string, string>[];
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

export interface UseWeather {
    weather?: Weather;
    loadWeather: () => void;
    isError: boolean;
}

export function useWeather(location: LatLon, units?: Units): UseWeather {
    const [isError, setIsError] = useState<boolean>(false);
    const [weather, setWeather] = useState<Weather | undefined>();

    async function loadWeather(): Promise<void> {
        setIsError(false);

        let result: AxiosResponse;
        try {
            result = await axios.get(appConfig.openWeatherApiEndpoint, {
                params: {
                    appId: appConfig.openWeatherAppId,
                    lat: location.lat || DEFAULT_LOCATION.lat,
                    lon: location.lon || DEFAULT_LOCATION.lon,
                    units: units || 'metric',
                },
            });
        } catch (error) {
            console.error(error);
            setIsError(true);
            return;
        }

        setWeather({
            ...result.data.current,
            daily: result.data.daily.slice(1, DAILY_FORECAST_COUNT + 1),
            icon: result.data.current.weather[0].id,
            pop: result.data.hourly[0].pop,
        });
    }

    return {
        weather,
        loadWeather,
        isError,
    };
}
