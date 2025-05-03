import * as React from 'react';
import { Box, Typography } from '@mui/material';

import { lineNumberStyles } from './styles';

interface ILineNumberProps {
    onClick?: () => void;
    value: string;
}

export const LineNumber: React.FC<ILineNumberProps> = (
    props: ILineNumberProps,
) => {
    const getBackgroundColor = () => {
        if (props.value === 'U1') {
            return '#e20210';
        }

        if (props.value === 'U2') {
            return '#935e98';
        }

        if (props.value === 'U3') {
            return '#ef7e00';
        }

        if (props.value === 'U4') {
            return '#079243';
        }

        if (props.value === 'U5') {
            return '#008F96';
        }

        if (props.value === 'U6') {
            return '#a4642c';
        }

        if (props.value.includes('A') || props.value.includes('B')) {
            return 'linear-gradient(315deg, hsla(227, 100%, 25%, 1) 0%, hsla(215, 100%, 28%, 1) 100%)';
        }

        return 'linear-gradient(315deg, hsla(0, 100%, 40%, 1) 0%, hsla(0, 100%, 27%, 1) 100%)';
    };

    return (
        <Typography
            variant={'body2'}
            onClick={props.onClick}
            sx={lineNumberStyles(getBackgroundColor())}
            component={Box}
        >
            {props.value}
        </Typography>
    );
};
