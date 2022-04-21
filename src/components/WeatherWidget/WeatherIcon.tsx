import * as React from 'react';

import {Box, SxProps} from '@mui/material';
import Icon from '@mdi/react';

import {isDay} from '../../helpers/timeHelpers';
import {weatherIcons} from './helpers/weatherIconHelpers';

const DEFAULT_WEATHER_ICON_ID = '800';

export interface IWeatherIconProps {
    size?: string;
    iconId?: number;
    sunsetMs?: number;
    sunriseMs?: number;
    dateTimeMs?: number;
    sx?: SxProps;
}

export const WeatherIcon: React.FC<IWeatherIconProps> = (props: IWeatherIconProps) => {
    const renderIcon = (): React.ReactNode => {
        const icon = props.iconId ? props.iconId.toString() : DEFAULT_WEATHER_ICON_ID;

        if (isDay(props.sunriseMs, props.sunsetMs, props.dateTimeMs)) {
            return (
                <Icon
                    path={weatherIcons[icon].day}
                    size={props.size}
                />
            );
        } else {
            return (
                <Icon
                    path={weatherIcons[icon].night}
                    size={props.size}
                />
            );
        }
    };

    return (
        <Box sx={props.sx}>
            {renderIcon()}
        </Box>
    );
};
