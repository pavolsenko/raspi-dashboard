import * as React from 'react';
import { Box } from '@mui/material';

import { LineNumber } from './LineNumber';
import { LineDirection } from './LineDirection';
import { Countdowns } from './Countdowns';
import { ILine } from '../../interfaces';
import { getFirstTwoCountdowns } from '../../helpers/stationsHelper';

import { lineNameStyles, lineStyles } from './styles';

interface ILineProps {
    line: ILine;
}

export const Line: React.FC<ILineProps> = (props: ILineProps) => {
    return (
        <Box sx={lineStyles}>
            <Box sx={lineNameStyles}>
                <LineNumber value={props.line.name} />
                <LineDirection direction={props.line.direction} />
            </Box>
            <Countdowns values={getFirstTwoCountdowns(props.line.departures)} />
        </Box>
    );
};
