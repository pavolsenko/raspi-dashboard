import { Box } from '@mui/material';
import { ReactNode } from 'react';

import { ILine } from '../../interfaces/departures';
import { Line } from './Line';

interface IStationProps {
    name: string;
    lines?: ILine[];
}

export function Station(props: IStationProps) {
    if (!props.lines) {
        return null;
    }

    const renderLines = (): ReactNode => {
        if (!props.lines) {
            return null;
        }

        const result: ReactNode[] = [];

        props.lines.forEach((line: ILine, index: number) => {
            if (!line.departures || line.departures.length === 0) {
                return;
            }

            result.push(<Line key={index.toString()} line={line} />);
        });

        return result;
    };

    return <Box>{renderLines()}</Box>;
}
