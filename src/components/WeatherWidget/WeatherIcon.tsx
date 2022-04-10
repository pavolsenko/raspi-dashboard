import * as React from 'react';
import * as WeatherIcons from 'react-icons/wi';

import {Box} from '@mui/material';
import {isDay} from '../../helpers/timeHelpers';

export interface IWeatherIconProps {
    iconId: number;
    sunset: number;
    sunrise: number;
}

export const WeatherIcon: React.FC<IWeatherIconProps> = (props: IWeatherIconProps) => {
    const icons: Record<string, {day: React.ReactNode, night: React.ReactNode}> = {
        '800': {day: <WeatherIcons.WiDaySunny/>, night: <WeatherIcons.WiNightClear/>},
    };

    const renderIcon = (): React.ReactNode => {
        if (props.iconId === 800) {
            return isDay(props.sunrise, props.sunset) ? icons[props.iconId.toString()].day : icons[props.iconId.toString()].night;
        }

        return icons['800'].day;
    };

    return (
        <Box sx={{fontSize: '130px'}}>
            {renderIcon()}
        </Box>
    );
};
