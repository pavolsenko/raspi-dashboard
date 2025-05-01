import { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

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
        <>
            <Typography variant={'body1'} component={Box}>
                {getValue()}
            </Typography>
            <Typography variant={'body2'} component={Box}>
                °C
            </Typography>
        </>
    );
}
