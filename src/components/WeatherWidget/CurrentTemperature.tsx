import { ReactNode } from 'react';
import { Box } from '@mui/material';

import { currentTemperatureStyles } from './style';

export interface ITemperatureProps {
    value?: number;
}

export function CurrentTemperature(props: ITemperatureProps) {
    function getValue(): ReactNode {
        if (!props.value) {
            return '--';
        }

        return props.value < 0
            ? Math.floor(props.value)
            : Math.ceil(props.value);
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <Box sx={{ fontSize: '72px' }}>{getValue()}</Box>
            <Box sx={currentTemperatureStyles}>°C</Box>
        </Box>
    );
}
