import {ReactNode} from "react";

import {Box, useTheme} from '@mui/material';
import Icon from '@mdi/react';
import {mdiBusClock} from '@mdi/js';

import {IStation, IWidgetProps} from '../../interfaces';
import {WidgetHeader} from '../Widget/WidgetHeader';
import {useDepartures} from '../../hooks/useDepartures';
import {Station} from './Station';
import {useDateTime} from '../../hooks/useDateTime';
import {normalizeTime} from '../../helpers/timeHelpers';
import {Widget} from "../Widget/Widget";
import {Error} from "../Widget/Error";

export function WienerLinienWidget(props: IWidgetProps) {
    const theme = useTheme();
    const dateTime = useDateTime();
    const {
        departures,
        isError,
        removeStation,
        removeLine,
        resetCache,
    } = useDepartures();

    function renderStatus(): ReactNode {
        if (isError) {
            return <Error/>;
        }

        return null;
    }

    function renderStations(): ReactNode | ReactNode[] {
        if (departures.count() === 0 || isError) {
            return null;
        }

        const result: React.ReactNode[] = [];
        departures
            .sort((a: IStation, b: IStation): number => a.order - b.order)
            .forEach((station: IStation) => {
                result.push(
                    <Station
                        key={station.name}
                        lines={station.lines}
                        name={station.name}
                        onStationClick={removeStation}
                        onLineClick={removeLine}
                    />
                );
            });

        return result;
    }

    return (
        <Widget>
            <WidgetHeader
                title="Wiener Linien"
                subtitle="Departures"
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
        </Widget>
    );
}
