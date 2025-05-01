import { Box, useTheme } from '@mui/material';

import { normalizeTime } from '../../helpers/timeHelpers';
import { useDateTime } from '../../hooks/useDateTime';
import { Widget } from '../Widget/Widget';

import { dateStyles, timeStyles } from './styles';

export function TimeWidget() {
    const theme = useTheme();
    const dateTime = useDateTime();

    return (
        <Widget>
            <Box sx={timeStyles}>{normalizeTime(dateTime)}</Box>
            <Box sx={dateStyles(theme)}>
                {dateTime.toLocaleDateString('default', { weekday: 'long' })}
            </Box>
            <Box sx={dateStyles(theme)}>
                {dateTime.toLocaleDateString('default', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                })}
            </Box>
        </Widget>
    );
}
