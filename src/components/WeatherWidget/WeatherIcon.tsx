import * as React from 'react';

import {Box, SxProps} from '@mui/material';
import Icon from '@mdi/react';
import {mdiWeatherSunny} from '@mdi/js';
import {mdiWeatherNight} from '@mdi/js';

import {isDay} from '../../helpers/timeHelpers';

export interface IWeatherIconProps {
    size?: string;
    iconId?: number;
    sunset?: number;
    sunrise?: number;
    sx?: SxProps;
}

export const WeatherIcon: React.FC<IWeatherIconProps> = (props: IWeatherIconProps) => {
    const icons: Record<string, {day: React.ReactNode, night: React.ReactNode}> = {
        '800': {day: <Icon path={mdiWeatherSunny} size={props.size}/>, night: <Icon path={mdiWeatherNight} size={props.size}/>},
    };

    const renderIcon = (): React.ReactNode => {
        if (props.iconId === 800) {
            return isDay(props.sunrise, props.sunset) ? icons[props.iconId.toString()].day : icons[props.iconId.toString()].night;
        }

        return icons['800'].day;
    };

    return (
        <Box sx={props.sx}>
            {renderIcon()}
        </Box>
    );
};
