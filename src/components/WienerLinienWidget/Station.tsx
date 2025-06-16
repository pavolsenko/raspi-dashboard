import { ReactNode } from 'react';
import { Box } from '@mui/material';

import { LineDeparture } from '@app/interfaces/departures';
import { Line } from '@app/components/WienerLinienWidget/Line';

interface StationProps {
    name: string;
    lines?: LineDeparture[];
}

export function Station(props: Readonly<StationProps>) {
    if (!props.lines) {
        return null;
    }

    const renderLines = (): ReactNode => {
        if (!props.lines) {
            return null;
        }

        const result: ReactNode[] = [];

        props.lines.forEach((line: LineDeparture, index: number) => {
            if (!line.departures || line.departures.length === 0) {
                return;
            }

            result.push(<Line key={index.toString()} line={line} />);
        });

        return result;
    };

    return <Box>{renderLines()}</Box>;
}
