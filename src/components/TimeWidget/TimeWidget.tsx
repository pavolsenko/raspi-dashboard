import { Box, Typography, useTheme } from '@mui/material';

import { normalizeTime } from '../../helpers/timeHelpers';
import { useDateTime } from '../../hooks/useDateTime';
import { Widget } from '../Widget/Widget';

import { dateStyles, timeStyles } from './styles';

export function TimeWidget() {
    const theme = useTheme();
    const dateTime = useDateTime();

    return (
        <Widget>
            <Typography variant={'body1'} sx={timeStyles} component={Box}>
                {normalizeTime(dateTime)}
            </Typography>
            <Typography
                variant={'body2'}
                sx={dateStyles(theme)}
                component={Box}
            >
                {dateTime.toLocaleDateString('default', { weekday: 'long' })}
            </Typography>
            <Typography
                variant={'body2'}
                sx={dateStyles(theme)}
                component={Box}
            >
                {dateTime.toLocaleDateString('default', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                })}
            </Typography>
        </Widget>
    );
}
