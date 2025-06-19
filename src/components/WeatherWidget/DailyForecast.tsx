import { ReactNode, useCallback } from 'react';
import { Box } from '@mui/material';

import { ForecastDay } from '@app/interfaces/weather';
import { getDayName } from '@app/helpers/timeHelpers';
import { DailyForecastItem } from '@app/components/WeatherWidget/DailyForecastItem';

import { dailyForecastStyles } from './weatherStyles';

interface ForecastProps {
    days?: ForecastDay[];
}

export function DailyForecast(props: Readonly<ForecastProps>) {
    const dailyForecast = useCallback((): ReactNode => {
        return props.days?.map((day: ForecastDay, index: number): ReactNode => {
            const dayName: string = getDayName(index + 1);
            return (
                <DailyForecastItem day={day} dayName={dayName} key={dayName} />
            );
        });
    }, [props.days]);

    return <Box sx={dailyForecastStyles}>{dailyForecast()}</Box>;
}
