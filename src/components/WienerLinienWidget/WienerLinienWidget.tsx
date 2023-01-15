import * as React from 'react';

import {Box, CircularProgress, useTheme} from '@mui/material';
import Icon from '@mdi/react';
import {mdiBusClock, mdiWeatherCloudyAlert} from '@mdi/js';

import {IStation, IWidgetProps} from '../../interfaces';
import {WidgetHeader} from '../WidgetHeader';
import {useDepartures} from '../../hooks/useDepartures';
import {Station} from './Station';
import {useDateTime} from '../../hooks/useDateTime';
import {normalizeTime} from '../../helpers/timeHelpers';

export const WienerLinienWidget: React.FC<IWidgetProps> = (props: IWidgetProps) => {
    const theme = useTheme();
    const dateTime = useDateTime();
    const {
        departures,
        isError,
        removeStation,
        resetCache,
    } = useDepartures();

    const renderStatus = () => {
        if (!isError || (departures && departures.count() > 0)) {
            return null;
        }

        let status: React.ReactNode;

        if (isError) {
            status = (
                <Icon path={mdiWeatherCloudyAlert} size={'36px'}/>
            );
        } else if (departures && departures.count() === 0) {
            status = (
                <CircularProgress
                    color={'inherit'}
                    size={42}
                />
            );
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
                {status}
            </Box>
        );
    };

    const renderStations = (): React.ReactNode[] => {
        const result: React.ReactNode[] = [];

        departures
            .sort((a: IStation, b: IStation) => a.order - b.order)
            .forEach((station: IStation, index: string) => {
                result.push(
                    <Station
                        key={station.name}
                        lines={station.lines}
                        name={station.name}
                        onStationClick={() => removeStation(index)}
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
                <Box
                    sx={{marginTop: '12px', display: 'flex'}}
                    onClick={resetCache}
                >
                    <Icon
                        path={mdiBusClock}
                        size={'58px'}
                    />
                    <Box sx={{fontSize: '46px', marginLeft: theme.spacing(1)}}>
                        {normalizeTime(dateTime)}
                    </Box>
                </Box>
            </WidgetHeader>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                backgroundColor: '#f0f0f0',
                color: '#666666',
                padding: '0 16px 16px 16px',
            }}>
                {renderStatus()}
                {renderStations()}
            </Box>
        </Box>
    );
};
