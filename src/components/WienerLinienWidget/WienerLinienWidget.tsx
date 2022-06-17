import * as React from 'react';

import {Box} from '@mui/material';
import Icon from '@mdi/react';
import {mdiBusClock, mdiWeatherCloudyAlert} from '@mdi/js';

import {IStation, IWidgetProps} from '../../interfaces';
import {WidgetHeader} from '../WidgetHeader';
import {useDepartures} from '../../hooks/useDepartures';
import {Stop} from './Stop';

export const WienerLinienWidget: React.FC<IWidgetProps> = (props: IWidgetProps) => {
    const {
        departures,
        isError,
    } = useDepartures();

    console.log(departures);

    const renderError = () => {
        if (!isError) {
            return null;
        }

        return (
            <Box sx={{
                color: '#a0a0a0',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Icon path={mdiWeatherCloudyAlert} size={'36px'}/>
            </Box>
        );
    };

    const renderStops = (): React.ReactNode[] => {
        const result: React.ReactNode[] = [];

        departures.forEach((stop: IStation) => {
            result.push(
                <Stop
                    key={stop.name}
                    lines={stop.lines}
                    name={stop.name}
                />
            );
        });

        return result;
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
