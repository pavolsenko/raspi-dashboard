import * as React from 'react';

import {Alert, Box, CircularProgress} from '@mui/material';

import {WeatherIcon} from './WeatherIcon';
import {SunriseSunset} from './SunriseSunset';
import {useWeather} from './hooks/useWeather';
import {AppConfig} from '../../config/appConfig';
import {Temperature} from './Temperature';
import {Time} from './Time';
import {Rain} from './Rain';
import {Wind} from './Wind';

export interface IWeatherProps {
    units?: 'metric' | 'imperial';
}

export const WeatherWidget: React.FC<IWeatherProps> = (props: IWeatherProps) => {
    const [isInitialLoad, setIsInitialLoad] = React.useState<boolean>(true);

    const {
        weather,
        loadWeather,
        isError,
        isLoading,
    } = useWeather(props.units);

    React.useEffect(() => {
        if (isInitialLoad) {
            (async () => await loadWeather())();
            setIsInitialLoad(false);
        }

        const interval = setInterval(
            async () => await loadWeather(),
            AppConfig.defaultUpdateInterval,
        );

        return () => clearInterval(interval);
    }, [loadWeather, isInitialLoad, setIsInitialLoad]);

    if (isLoading) {
        return (
            <Box sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <CircularProgress/>
            </Box>
        );
    }

    if (isError) {
        return (
            <Alert severity={'error'}>Sorry, something went wrong</Alert>
        );
    }

    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Box sx={{
                width: '100%',
                backgroundColor: '#01B0F1',
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '32px',
                    margin: '16px',
                }}>
                    <Box>Wien</Box>
                    <Time/>
                </Box>

                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '60px',
                }}>
                    <WeatherIcon
                        iconId={weather?.icon}
                        sunset={weather?.sunset}
                        sunrise={weather?.sunrise}

                    />
                    <Temperature value={weather?.temperature}/>
                </Box>
            </Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: '#ffffff',
                color: '#333333',
            }}>
                <Rain
                    value={weather?.pop}
                />

                <Wind
                    direction={weather?.wind_deg}
                    speed={weather?.wind_speed}
                />

                <SunriseSunset
                    sunrise={weather?.sunrise}
                    sunset={weather?.sunset}
                />
            </Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexGrow: 1,
                backgroundColor: '#ffffff',
                color: '#333333',
            }}>
                test
            </Box>
        </Box>
    );
};
