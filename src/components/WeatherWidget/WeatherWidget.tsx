import * as React from 'react';

import {Box} from '@mui/material';
import Icon from '@mdi/react';
import {mdiWeatherCloudyAlert} from '@mdi/js';

import {WeatherIcon} from './WeatherIcon';
import {Sunset} from './Sunset';
import {useWeather} from '../../hooks/useWeather';
import {AppConfig} from '../../config/appConfig';
import {IWidgetProps} from '../../interfaces';
import {CurrentTemperature} from './CurrentTemperature';
import {Rain} from './Rain';
import {Wind} from './Wind';
import {DailyForecast} from './DailyForecast';
import {WidgetHeader} from '../Widget/WidgetHeader';
import {Loading} from '../Widget/Loading';
import {Sunrise} from './Sunrise';
import {Humidity} from './Humidity';
import {HourlyForecast} from './HourlyForecast';
import {Widget} from "../Widget/Widget";
import {DEFAULT_LOCATION} from "../../config/weatherConfig";

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
            (async () => {await loadWeather()})();
            setIsInitialLoad(false);
        }

        const interval = setInterval(
            async () => {await loadWeather()},
            AppConfig.defaultUpdateInterval,
        );

        return () => clearInterval(interval);
    }, [loadWeather, isInitialLoad, setIsInitialLoad]);

    const renderLoading = () => {
        if (!isLoading) {
            return null;
        }

        return (
            <Box sx={{color: props.headerBackgroundColor}}>
                <Loading/>
            </Box>
        );
    };

    const renderError = () => {
        if (!isError) {
            return null;
        }

        return (
            <Box sx={{color: '#a0a0a0'}}>
                <Icon path={mdiWeatherCloudyAlert} size={'36px'}/>
            </Box>
        );
    };

    return (
        <Widget>
            <WidgetHeader
                backgroundColor={props.headerBackgroundColor}
                subtitle={'Wien, Österreich'}
                title={'Weather'}
            >
                <WeatherIcon
                    iconId={weather?.icon}
                    sunsetMs={weather?.sunset}
                    sunriseMs={weather?.sunrise}
                    size={'68px'}
                    sx={{marginTop: '16px', marginRight: '4px'}}
                />
                <CurrentTemperature value={weather?.temp}/>
            </WidgetHeader>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: '#e0e0e0',
                color: '#666666',
                padding: '8px',
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
                {renderLoading()}
                {renderError()}

                <HourlyForecast
                    sunrise={weather?.sunrise}
                    sunset={weather?.sunset}
                    hours={weather?.hourly}
                />

                <DailyForecast days={weather?.daily}/>
            </Box>
        </Widget>
    );
};
