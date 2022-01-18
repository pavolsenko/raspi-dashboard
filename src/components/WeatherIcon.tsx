import * as React from 'react';

import Icon from '@mdi/react'
import {
    mdiWeatherNight,
    mdiWeatherSunny,
} from '@mdi/js';

export interface IWeatherIconProps {
    iconId: number;
    sunset: number;
    sunrise: number;
}

export const WeatherIcon: React.FC<IWeatherIconProps> = (props: IWeatherIconProps) => {
    const isDay = Date.now() > props.sunrise * 1000 && Date.now() < props.sunset * 1000;

    if (props.iconId === 800) {
        if (isDay) {
            return (
                <Icon size={4} path={mdiWeatherSunny}/>
            );
        } else {
            return (
                <Icon size={4} path={mdiWeatherNight}/>
            );
        }
    }

    return null;
}
