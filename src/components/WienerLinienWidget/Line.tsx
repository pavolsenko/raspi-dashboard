import { Box } from '@mui/material';

import { LineNumber } from './LineNumber';
import { LineDirection } from './LineDirection';
import { Countdowns } from './Countdowns';
import { ILine } from '../../interfaces/departures';

import { lineNameStyles, lineStyles } from './styles';

interface ILineProps {
    line: ILine;
}

export function Line(props: ILineProps) {
    return (
        <Box sx={lineStyles}>
            <Box sx={lineNameStyles}>
                <LineNumber value={props.line.name} />
                <LineDirection direction={props.line.direction} />
            </Box>
            <Countdowns departures={props.line.departures} />
        </Box>
    );
}
