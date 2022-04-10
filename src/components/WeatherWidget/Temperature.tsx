import * as React from 'react';
import {Box} from '@mui/material';

export interface ITemperatureProps {
    value: number;
}

export const Temperature: React.FC<ITemperatureProps> = (props: ITemperatureProps) => {
    return (
        <Box sx={{display: 'flex'}}>
            <Box sx={{fontSize: '72px'}}>
                {props.value || '10'}
            </Box>
            <Box sx={{
                fontSize: '36px',
                marginTop: '16px',
            }}>
                °C
            </Box>
        </Box>
    );
}
