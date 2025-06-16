import { Box } from '@mui/material';

import { LineNumber } from '@app/components/WienerLinienWidget/LineNumber';
import { LineDirection } from '@app/components/WienerLinienWidget/LineDirection';
import { Countdowns } from '@app/components/WienerLinienWidget/Countdowns';
import { LineDeparture } from '@app/interfaces/departures';

import { lineNameStyles, lineStyles } from './lineStyles';

interface LineProps {
    line: LineDeparture;
}

export function Line(props: Readonly<LineProps>) {
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
