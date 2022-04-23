import * as React from 'react';

import {Box} from '@mui/material';
import {mdiArrowUp, mdiUmbrellaOutline, mdiThermometerChevronDown, mdiThermometerChevronUp} from '@mdi/js';

import {WeatherIcon} from './WeatherIcon';
import {getDayOfTheWeek} from '../../helpers/timeHelpers';
import {WidgetSubtitle} from '../WidgetSubtitle';

interface IForecastProps {
    days?: Record<string, any>[];
}

export const DailyForecast: React.FC<IForecastProps> = (props: IForecastProps) => {
    const renderDays = (): React.ReactNode[] => {
        if (!props.days) {
            return [];
        }

        const result: React.ReactNode[] = [];

        props.days.forEach((day: Record<string, any>, index: number) => {
            result.push(
                <Box
                    key={index.toString()}
                    sx={{
                        margin: '0 16px',
                        borderTop: '1px solid #cccccc',
                        padding: '12px 0 0 0',
                    }}
                >
                    <Box sx={{fontSize: '12px'}}>
                        {getDayOfTheWeek(new Date(day.dt * 1000).getDay())},&nbsp;
                        {new Date(day.dt * 1000).toLocaleDateString()}
                    </Box>

                    <Box sx={{display: 'flex'}}>
                        <Box sx={{
                            display: 'flex',
                            margin: '4px',
                            width: '120px',
                        }}>
                            <WeatherIcon
                                iconId={day.weather[0].id}
                                size={'36px'}
                            />
                            <Box sx={{display: 'flex', marginLeft: '8px'}}>
                                <Box sx={{fontSize: '28px'}}>{day.temp.day.toFixed()}</Box>
                                <Box sx={{marginTop: '4px'}}>°C</Box>
                            </Box>
                        </Box>

                        <Box sx={{marginRight: '16px'}}>
                            <WidgetSubtitle
                                icon={mdiThermometerChevronUp}
                                units={'°C'}
                                value={Math.floor(day.temp.max).toString()}
                            />

                            <WidgetSubtitle
                                icon={mdiThermometerChevronDown}
                                units={'°C'}
                                value={Math.floor(day.temp.min).toString()}
                            />
                        </Box>

                        <Box>
                            <WidgetSubtitle
                                icon={mdiUmbrellaOutline}
                                units={'%'}
                                value={Math.floor(day.pop * 100).toString()}
                            />

                            <WidgetSubtitle
                                icon={mdiArrowUp}
                                iconRotation={day.wind_deg}
                                units={'m/s'}
                                value={day.wind_speed.toFixed()}
                            />
                        </Box>
                    </Box>
                </Box>
            );
        });

        return result;
    };

    return (
        <>
            {renderDays()}
        </>
    );
};
