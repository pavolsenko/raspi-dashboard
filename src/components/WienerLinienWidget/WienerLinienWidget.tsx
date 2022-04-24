import * as React from 'react';

import {Box} from '@mui/material';
import Icon from '@mdi/react';
import {mdiBusClock, mdiWeatherCloudyAlert} from '@mdi/js';

import {AppConfig} from '../../config/appConfig';
import {IWidgetProps} from '../../interfaces';
import {WidgetHeader} from '../WidgetHeader';
import {Loading} from '../Loading';
import {useDepartures} from '../../hooks/useDepartures';

export const WienerLinienWidget: React.FC<IWidgetProps> = (props: IWidgetProps) => {
    const [isInitialLoad, setIsInitialLoad] = React.useState<boolean>(true);

    const {
        departures,
        loadDepartures,
        isError,
        isLoading,
    } = useDepartures();

    React.useEffect(() => {
        if (isInitialLoad) {
            (async () => {await loadDepartures()})();
            setIsInitialLoad(false);
        }

        const interval = setInterval(
            async () => {await loadDepartures()},
            AppConfig.defaultUpdateInterval,
        );

        return () => clearInterval(interval);
    }, [loadDepartures, isInitialLoad, setIsInitialLoad]);

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
                flexGrow: '1',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f0f0f0',
            }}>
                {renderLoading()}
                {renderError()}
                {departures[0]?.countdown}
            </Box>
        </Box>
    );
};
