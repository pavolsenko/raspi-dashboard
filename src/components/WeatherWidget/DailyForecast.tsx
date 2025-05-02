import * as React from 'react';

import { Box, useTheme } from '@mui/material';

import { DailyForecastItem } from './DailyForecastItem';
import { DEFAULT_TEMPERATURE_OFFSET } from '../../config/weatherConfig';
import { dailyForecastStyles } from './styles';

interface IForecastProps {
    days?: Record<string, any>[];
}

export const DailyForecast: React.FC<IForecastProps> = (
    props: IForecastProps,
) => {
    const theme = useTheme();

    if (!props.days) {
        return null;
    }

    const result: React.ReactNode[] = [];

    props.days.forEach((day: Record<string, any>, index: number) => {
        result.push(
            <DailyForecastItem
                day={day}
                key={day.dt.toString()}
                index={index}
            />,
        );
    });

    return <Box sx={dailyForecastStyles(theme)}>{result}</Box>;
};
