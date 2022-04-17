import * as React from 'react';

import {Alert, Box} from '@mui/material';

import {WeatherIcon} from './WeatherIcon';
import {Sunset} from './Sunset';
import {useWeather} from './hooks/useWeather';
import {AppConfig} from '../../config/appConfig';
import {IWidgetProps} from '../../interfaces';
import {Temperature} from './Temperature';
import {Rain} from './Rain';
import {Wind} from './Wind';
import {Forecast} from './Forecast';
import {WidgetHeader} from '../WidgetHeader';
import {Loading} from '../Loading';
import {Sunrise} from './Sunrise';
import {Humidity} from './Humidity';
import {ILatLon} from './interfaces';

export const DEFAULT_LOCATION: ILatLon = {lat: 48.2085, lon: 16.3721};

export interface IWeatherProps extends IWidgetProps {
    units?: 'metric' | 'imperial';
}

export const WeatherWidget: React.FC<IWeatherProps> = (props: IWeatherProps) => {
    const [isInitialLoad, setIsInitialLoad] = React.useState<boolean>(true);

    const {
        weather,
        loadWeather,
        isError,
        isLoading,
    } = useWeather(DEFAULT_LOCATION, props.units);

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
            <Loading/>
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
            <WidgetHeader
                title={'Weather'}
                subtitle={'Wien, Österreich'}
                backgroundColor={props.headerBackgroundColor}
            >
                <WeatherIcon
                    iconId={weather?.icon}
                    sunset={weather?.sunset}
                    sunrise={weather?.sunrise}
                    size={'56px'}
                    sx={{marginTop: '14px', marginRight: '4px'}}
                />
                <Temperature value={weather?.temp}/>
            </WidgetHeader>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: '#e0e0e0',
                color: '#666666',
            }}>
                <Rain percentage={weather?.pop}/>
                <Humidity humidity={weather?.humidity}/>
                <Wind
                    direction={weather?.wind_deg}
                    speed={weather?.wind_speed}
                />
                <Sunrise sunrise={weather?.sunrise}/>
                <Sunset sunset={weather?.sunset}/>
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                backgroundColor: '#f0f0f0',
                color: '#666666',
            }}>
                <Forecast days={weather?.daily}/>
            </Box>
        </Box>
    );
};
