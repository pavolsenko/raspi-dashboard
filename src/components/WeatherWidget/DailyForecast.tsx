import * as React from 'react';

import { Box } from '@mui/material';

import { DailyForecastItem } from './DailyForecastItem';
import { dailyForecastStyles } from './styles';

interface IForecastProps {
    days?: Record<string, any>[];
}

export const DailyForecast: React.FC<IForecastProps> = (
    props: IForecastProps,
) => {
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

    return <Box sx={dailyForecastStyles}>{result}</Box>;
};
