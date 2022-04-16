import * as React from 'react';
import {Box} from '@mui/material';

export interface ITemperatureProps {
    value?: number;
}

export const Temperature: React.FC<ITemperatureProps> = (props: ITemperatureProps) => {
    return (
        <Box sx={{display: 'flex'}}>
            <Box sx={{fontSize: '60px'}}>
                {props.value?.toFixed()}
            </Box>
            <Box sx={{
                fontSize: '24px',
                paddingTop: '12px',
            }}>
                °C
            </Box>
        </Box>
    );
};
