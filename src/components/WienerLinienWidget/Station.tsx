import * as React from 'react';

import { Box } from '@mui/material';

import { ILine } from '../../interfaces';
import { Line } from './Line';

interface IStationProps {
    name: string;
    lines?: ILine[];
    onLineClick?: (stationIndex: string, lineIndex: number) => void;
    onStationClick?: (stationIndex: string) => void;
}

export const Station: React.FC<IStationProps> = (props: IStationProps) => {
    if (!props.lines) {
        return null;
    }

    const onLineClick = (index: number) => {
        return function () {
            props.onLineClick?.(props.name, index);
        };
    };

    const onStationClick = () => {
        props.onStationClick?.(props.name);
    };

    const renderLines = (): React.ReactNode | React.ReactNode[] => {
        if (!props.lines) {
            return null;
        }

        const result: React.ReactNode[] = [];

        props.lines.forEach((line: ILine, index: number) => {
            if (!line.departures || line.departures.length === 0) {
                return;
            }

            result.push(
                <Line
                    key={index.toString()}
                    line={line}
                    onClick={onLineClick(index)}
                />,
            );
        });

        return result;
    };

    return (
        <Box
            sx={{
                width: '100%',
            }}
        >
            <Box
                onClick={onStationClick}
                sx={{
                    fontSize: '12px',
                    backgroundColor: '#dddddd',
                    width: '130px',
                    textAlign: 'center',
                    borderRadius: '12px',
                    padding: '0 8px',
                    marginBottom: '16px',
                    marginTop: '16px',
                }}
            >
                {props.name}
            </Box>
            {renderLines()}
        </Box>
    );
};
