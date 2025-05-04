import * as React from 'react';
import Icon from '@mdi/react';

import { isDay } from '../../helpers/timeHelpers';
import { getWeatherIcon } from '../../helpers/weatherHelpers';

export interface WeatherIconProps {
    size?: string;
    iconId?: number;
    sunsetMs?: number;
    sunriseMs?: number;
}

export function WeatherIcon(props: WeatherIconProps) {
    if (!props.iconId) {
        return null;
    }

    const icon: string = getWeatherIcon(
        props.iconId?.toString(),
        isDay(props.sunriseMs, props.sunsetMs, Date.now()),
    );

    return <Icon path={icon} size={props.size} />;
}
