import { Box, Typography } from '@mui/material';

import { getBackgroundColor } from '@app/helpers/stationsHelper';

import { lineNumberStyles } from './lineStyles';

interface LineNumberProps {
    onClick?: () => void;
    value: string;
}

export function LineNumber(props: Readonly<LineNumberProps>) {
    return (
        <Typography
            variant={'body2'}
            onClick={props.onClick}
            sx={lineNumberStyles(getBackgroundColor(props.value))}
            component={Box}
        >
            {props.value}
        </Typography>
    );
}
