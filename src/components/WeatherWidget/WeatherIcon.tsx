import * as React from 'react';

import {Box, SxProps} from '@mui/material';
import Icon from '@mdi/react';

import {isDay} from '../../helpers/timeHelpers';
import {getWeatherIcon} from '../../helpers/weatherHelpers';

export interface IWeatherIconProps {
    size?: string;
    iconId?: number;
    sunsetMs?: number;
    sunriseMs?: number;
    dateTimeMs?: number;
    sx?: SxProps;
}

export const WeatherIcon: React.FC<IWeatherIconProps> = (props: IWeatherIconProps) => {
    if (!props.iconId) {
        return null;
    }

    const icon: string = getWeatherIcon(
        props.iconId?.toString(),
        isDay(props.sunriseMs, props.sunsetMs, props.dateTimeMs),
    );

    return (
        <Box sx={props.sx}>
            <Icon
                path={icon}
                size={props.size}
            />
        </Box>
    );
};
