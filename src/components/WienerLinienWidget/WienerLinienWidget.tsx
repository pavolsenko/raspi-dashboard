import { ReactNode } from 'react';

import { IStation } from '../../interfaces';
import { useDepartures } from '../../hooks/useDepartures';
import { Station } from './Station';
import { Widget } from '../Widget/Widget';
import { Error } from '../Widget/Error';

export function WienerLinienWidget() {
    const { departures, isError, removeStation, removeLine } = useDepartures();

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
                    />,
                );
            });

        return result;
    }

    if (isError || departures.count() === 0) {
        return <Error />;
    }

    return <Widget>{renderStations()}</Widget>;
}
