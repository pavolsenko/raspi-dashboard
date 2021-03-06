import * as React from 'react';

import {Box} from '@mui/material';

import {ILine} from '../../interfaces';
import {LineNumber} from './LineNumber';
import {Countdowns} from './Countdowns';
import {LineDirection} from './LineDirection';

interface IStationProps {
    name: string;
    lines?: ILine[];
}

export const Station: React.FC<IStationProps> = (props: IStationProps) => {
    if (!props.lines) {
        return null;
    }

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
                <Box
                    key={index.toString()}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        marginTop: '8px',
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <LineNumber value={line.name}/>
                        <LineDirection direction={line.direction}/>
                    </Box>
                    <Countdowns values={line.departures}/>
                </Box>
            );
        });

        return result;
    };

    return (
        <Box sx={{
            width: '100%',
        }}>
            <Box sx={{
                fontSize: '12px',
                backgroundColor: '#dddddd',
                width: '130px',
                textAlign: 'center',
                borderRadius: '12px',
                padding: '0 8px',
                marginBottom: '16px',
                marginTop: '16px',
            }}>
                {props.name}
            </Box>
            {renderLines()}
        </Box>
    );
};
