import * as React from 'react';

import {Alert, Box} from '@mui/material';

import {WeatherIcon} from './WeatherIcon';
import {SunriseSunset} from './SunriseSunset';
import {useWeather} from './hooks/useWeather';
import {AppConfig} from '../../config/appConfig';
import {IWidgetProps} from '../../interfaces';
import {Temperature} from './Temperature';
import {Rain} from './Rain';
import {Wind} from './Wind';
import {Forecast} from './Forecast';
import {WidgetHeader} from '../WidgetHeader';
import {Loading} from '../Loading';

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
                backgroundColor: '#f0f0f0',
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
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                backgroundColor: '#f0f0f0',
            }}>
                <Forecast days={weather?.daily}/>
            </Box>
        </Box>
    );
};
