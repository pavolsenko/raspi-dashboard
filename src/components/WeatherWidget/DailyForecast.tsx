import * as React from 'react';

import { Box } from '@mui/material';

import { DailyForecastItem } from './DailyForecastItem';
import { DEFAULT_TEMPERATURE_OFFSET } from '../../config/weatherConfig';

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

    let lowerLimit = 40;
    let higherLimit = 0;

    props.days.forEach((day: Record<string, any>, index: number) => {
        if (index === 0) {
            return;
        }

        if (day.temp.min < lowerLimit) {
            lowerLimit = day.temp.min;
        }

        if (day.temp.max > higherLimit) {
            higherLimit = day.temp.max;
        }
    });

    result.push(
        <DailyForecastItem
            day={props.days[0]}
            lowerLimit={lowerLimit - DEFAULT_TEMPERATURE_OFFSET}
            higherLimit={higherLimit + DEFAULT_TEMPERATURE_OFFSET}
            key={'tomorrow'}
        />,
    );

    props.days.forEach((day: Record<string, any>, index: number) => {
        if (index === 0) {
            return;
        }

        result.push(
            <DailyForecastItem
                day={day}
                lowerLimit={lowerLimit - DEFAULT_TEMPERATURE_OFFSET}
                higherLimit={higherLimit + DEFAULT_TEMPERATURE_OFFSET}
                key={day.dt.toString()}
            />,
        );
    });

    return <Box sx={{ marginTop: '8px' }}>{result}</Box>;
};
