import * as React from 'react';

import {Box} from '@mui/material';
import Icon from '@mdi/react';
import {mdiBusClock, mdiWeatherCloudyAlert} from '@mdi/js';

import {AppConfig} from '../../config/appConfig';
import {IStop, IWidgetProps} from '../../interfaces';
import {WidgetHeader} from '../WidgetHeader';
import {useDepartures} from '../../hooks/useDepartures';
import {Stop} from './Stop';

export const WienerLinienWidget: React.FC<IWidgetProps> = (props: IWidgetProps) => {
    const [isInitialLoad, setIsInitialLoad] = React.useState<boolean>(true);

    const {
        departures,
        loadDepartures,
        isError,
    } = useDepartures();

    React.useEffect(() => {
        if (isInitialLoad) {
            (async () => {await loadDepartures()})();
            setIsInitialLoad(false);
        }

        const interval = setInterval(
            async () => {await loadDepartures()},
            AppConfig.wienerLinienUpdateInterval,
        );

        return () => clearInterval(interval);
    }, [loadDepartures, isInitialLoad, setIsInitialLoad]);

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

    const renderStops = (): React.ReactNode[] => {
        return departures.map((stop: IStop): React.ReactNode => {
            return (
                <Stop
                    key={stop.name}
                    lines={stop.lines}
                    name={stop.name}
                />
            );
        });
    };

    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <WidgetHeader
                title={'Wiener Linien'}
                subtitle={'Departures'}
                backgroundColor={props.headerBackgroundColor}
            >
                <Box sx={{marginTop: '12px'}}>
                    <Icon path={mdiBusClock} size={'58px'}/>
                </Box>
            </WidgetHeader>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                backgroundColor: '#f0f0f0',
                color: '#666666',
                padding: '16px',
            }}>
                {renderError()}
                {renderStops()}
            </Box>
        </Box>
    );
};
