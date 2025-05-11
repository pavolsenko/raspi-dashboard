import { Box, Typography } from '@mui/material';

import { getBackgroundColor } from '../../helpers/stationsHelper';

import { lineNumberStyles } from './styles';

interface LineNumberProps {
    onClick?: () => void;
    value: string;
}

export function LineNumber(props: LineNumberProps) {
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
