import { ReactNode } from 'react';
import { Box, useTheme } from '@mui/material';
import Icon from '@mdi/react';
import { mdiBusClock } from '@mdi/js';

import { IStation } from '../../interfaces';
import { WidgetHeader } from '../Widget/WidgetHeader';
import { useDepartures } from '../../hooks/useDepartures';
import { Station } from './Station';
import { useDateTime } from '../../hooks/useDateTime';
import { normalizeTime } from '../../helpers/timeHelpers';
import { IWidgetProps, Widget } from '../Widget/Widget';
import { Error } from '../Widget/Error';

import { departuresIconStyles, departuresStyles, departuresTimeStyles } from './styles';

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

        const result: ReactNode[] = [];
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
                    sx={departuresIconStyles}
                    onClick={resetCache}
                >
                    <Icon
                        path={mdiBusClock}
                        size={'58px'}
                    />
                    <Box sx={departuresTimeStyles(theme)}>
                        {normalizeTime(dateTime)}
                    </Box>
                </Box>
            </WidgetHeader>

            <Box sx={departuresStyles}>
                {renderStatus()}
                {renderStations()}
            </Box>
        </Widget>
    );
}
