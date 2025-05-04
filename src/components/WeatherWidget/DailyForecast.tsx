import { ReactNode } from 'react';
import { Box } from '@mui/material';

import { DailyForecastItem } from './DailyForecastItem';

import { dailyForecastStyles } from './styles';

interface IForecastProps {
    days?: Record<string, any>[];
}

export function DailyForecast(props: IForecastProps) {
    if (!props.days) {
        return null;
    }

    const result: ReactNode[] = [];

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
}
