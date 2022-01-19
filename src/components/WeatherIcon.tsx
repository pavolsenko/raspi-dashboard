import * as React from 'react';
import * as WeatherIcons from 'react-icons/wi';

import {Box} from '@mui/material';

export interface IWeatherIconProps {
    iconId: number;
    sunset: number;
    sunrise: number;
}

export const WeatherIcon: React.FC<IWeatherIconProps> = (props: IWeatherIconProps) => {
    const isDay = Date.now() > props.sunrise * 1000 && Date.now() < props.sunset * 1000;

    const renderIcon = (): React.ReactNode => {
        if (props.iconId === 800 && isDay) {
            return (
                <WeatherIcons.WiDaySunny/>
            );
        }

        if (props.iconId === 800 && !isDay) {
            return (
                <WeatherIcons.WiNightClear/>
            );
        }
    };

    return (
        <Box sx={{
            fontSize: '72px',
        }}>
            {renderIcon()}
        </Box>
    );
};
