import { ReactNode } from 'react';
import { Box } from '@mui/material';

import { IStation } from '../../interfaces';
import { useDepartures } from '../../hooks/useDepartures';
import { Station } from './Station';
import { Widget } from '../Widget/Widget';
import { Error } from '../Widget/Error';

export function WienerLinienWidget() {
    const { departures, isError, resetCache } = useDepartures();

    function renderStations(): ReactNode | ReactNode[] {
        if (departures.count() === 0 || isError) {
            return null;
        }

        const result: ReactNode[] = [];
        departures.forEach((station: IStation) => {
            result.push(
                <Station
                    key={station.name}
                    lines={station.lines}
                    name={station.name}
                />,
            );
        });

        return result;
    }

    if (isError || departures.count() === 0) {
        return <Error />;
    }

    return (
        <Widget>
            <Box onClick={() => resetCache()}>{renderStations()}</Box>
        </Widget>
    );
}
