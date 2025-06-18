import { ReactNode } from 'react';
import { Box } from '@mui/material';

import { StationDeparture } from '@app/interfaces/departures';
import { useDepartures } from '@app/hooks/useDepartures';
import { Station } from '@app/components/WienerLinienWidget/Station';
import { Widget } from '@app/components/Widget/Widget';
import { ErrorCloud } from '@app/components/Widget/ErrorCloud';

export function WienerLinienWidget() {
    const { departures, isError, resetCache } = useDepartures();

    function renderStations(): ReactNode | ReactNode[] {
        if (departures.count() === 0 || isError) {
            return null;
        }

        const result: ReactNode[] = [];
        departures.forEach((station: StationDeparture) => {
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
        return <ErrorCloud />;
    }

    return (
        <Widget>
            <Box onClick={() => resetCache()}>{renderStations()}</Box>
        </Widget>
    );
}
