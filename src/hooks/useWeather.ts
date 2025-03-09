import { useState } from 'react';
import axios from 'axios';

import { AppConfig } from '../config/appConfig';
import { getHourlyForecast } from '../helpers/weatherHelpers';
import {
    DAILY_FORECAST_COUNT,
    DEFAULT_LOCATION,
} from '../config/weatherConfig';

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
    isError: boolean;
}

export function useWeather(location: ILatLon, units?: TUnits): IUseWeather {
    const [isError, setIsError] = useState<boolean>(false);
    const [weather, setWeather] = useState<IWeather | undefined>();

    const loadWeather = async (): Promise<void> => {
        setIsError(false);

        let result: any;
        try {
            result = await axios.get(AppConfig.openWeatherApiEndpoint, {
                params: {
                    appId: AppConfig.openWeatherAppId,
                    lat: location.lat || DEFAULT_LOCATION.lat,
                    lon: location.lon || DEFAULT_LOCATION.lon,
                    units: units || 'metric',
                },
            });
        } catch (Error) {
            setIsError(true);
            return;
        }

        setWeather({
            ...result.data.current,
            daily: result.data.daily.slice(1, DAILY_FORECAST_COUNT + 1),
            hourly: getHourlyForecast(result.data.hourly),
            icon: result.data.current.weather[0].id,
            pop: result.data.hourly[0].pop,
        });
    };

    return {
        weather,
        loadWeather,
        isError,
    };
}
