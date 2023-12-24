import * as React from 'react';

import {Box} from '@mui/material';

import {LineNumber} from './LineNumber';
import {LineDirection} from './LineDirection';
import {Countdowns} from './Countdowns';
import {ILine} from '../../interfaces';

interface ILineProps {
    stationIndex: string;
    lineIndex: number;
    line: ILine;
    onClick?: () => void;
}

export const Line: React.FC<ILineProps> = (props: ILineProps) => {
    return (
        <Box
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
                <LineNumber
                    value={props.line.name}
                    onClick={props.onClick}
                />
                <LineDirection direction={props.line.direction}/>
            </Box>
            <Countdowns
                stationIndex={props.stationIndex}
                lineIndex={props.lineIndex}
                values={props.line.departures}
                onLineClick={props.onClick}
            />
        </Box>
    );
}
