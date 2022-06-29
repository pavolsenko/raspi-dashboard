import * as React from 'react';

import {Box} from '@mui/material';
import {mdiArrowUp, mdiUmbrellaOutline} from '@mdi/js';

import {WeatherIcon} from './WeatherIcon';
import {getDayOfTheWeek} from '../../helpers/timeHelpers';
import {WidgetSubtitle} from '../WidgetSubtitle';
import {Thermometer} from './Thermometer';

interface IForecastProps {
    days?: Record<string, any>[];
}

export const DailyForecast: React.FC<IForecastProps> = (props: IForecastProps) => {
    const renderDays = (): React.ReactNode[] => {
        if (!props.days) {
            return [];
        }

        const result: React.ReactNode[] = [];

        result.push(
            <Box
                key={'tomorrow'}
                sx={{
                    backgroundColor: '#dddddd',
                    padding: '8px',
                    marginBottom: '12px',
                    display: 'flex',
                    justifyContent: 'space-around',
                }}
            >
                <Box sx={{display: 'flex'}}>
                    <WeatherIcon
                        iconId={props.days[0].weather[0].id}
                        size={'62px'}
                    />
                    <Box sx={{display: 'flex', marginLeft: '8px'}}>
                        <Box sx={{fontSize: '48px'}}>{props.days[0].temp.day.toFixed()}</Box>
                        <Box sx={{fontSize: '22px', marginTop: '8px'}}>°C</Box>
                    </Box>
                </Box>

                <Box sx={{margin: '14px 4px'}}>
                    <WidgetSubtitle
                        icon={mdiUmbrellaOutline}
                        units={'%'}
                        value={Math.floor(props.days[0].pop * 100).toString()}
                    />

                    <WidgetSubtitle
                        icon={mdiArrowUp}
                        iconRotation={props.days[0].wind_deg}
                        units={'m/s'}
                        value={props.days[0].wind_speed.toFixed()}
                    />
                </Box>
            </Box>
        );

        props.days.forEach((day: Record<string, any>, index: number) => {
            if (index === 0) {
                return;
            }

            result.push(
                <Box
                    key={index.toString()}
                    sx={{margin: '4px 16px'}}
                >
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        margin: '4px',
                    }}>
                        <Box sx={{
                            width: '20px',
                            fontSize: '14px',
                        }}>
                            {getDayOfTheWeek(new Date(day.dt * 1000).getDay()).substring(0, 3)}
                        </Box>

                        <Box sx={{display: 'flex', marginLeft: '8px'}}>
                            <WeatherIcon
                                iconId={day.weather[0].id}
                                size={'36px'}
                            />

                            <Box sx={{
                                fontSize: '28px',
                                marginLeft: '8px',
                            }}>
                                {day.temp.day.toFixed()}
                            </Box>

                            <Box sx={{marginTop: '4px'}}>°C</Box>
                        </Box>

                        <Thermometer
                            low={Math.floor(day.temp.min)}
                            high={Math.ceil(day.temp.max)}
                        />
                    </Box>
                </Box>
            );
        });

        return result;
    };

    return (
        <Box sx={{
            display: 'grid',
            columnCount: 2,
        }}>
            {renderDays()}
        </Box>
    );
};
