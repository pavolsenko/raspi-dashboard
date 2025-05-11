import { ReactNode, useCallback } from 'react';
import { Box } from '@mui/material';

import { getDayName } from '../../helpers/timeHelpers';
import { DailyForecastItem } from './DailyForecastItem';

import { dailyForecastStyles } from './styles';

interface IForecastProps {
    days?: Record<string, any>[];
}

export function DailyForecast(props: IForecastProps) {
    const dailyForecast = useCallback((): ReactNode => {
        return props.days?.map(
            (day: Record<string, any>, index: number): ReactNode => {
                const dayName: string = getDayName(index + 1);
                return (
                    <DailyForecastItem
                        day={day}
                        dayName={dayName}
                        key={dayName}
                    />
                );
            },
        );
    }, [props.days]);

    return <Box sx={dailyForecastStyles}>{dailyForecast()}</Box>;
}
