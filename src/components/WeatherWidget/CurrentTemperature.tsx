import * as React from 'react';
import {Box} from '@mui/material';

export interface ITemperatureProps {
    value?: number;
}

export const CurrentTemperature: React.FC<ITemperatureProps> = (props: ITemperatureProps) => {
    return (
        <Box sx={{display: 'flex'}}>
            <Box sx={{fontSize: '72px'}}>
                {props.value?.toFixed()}
            </Box>
            <Box sx={{
                fontSize: '32px',
                paddingTop: '16px',
            }}>
                °C
            </Box>
        </Box>
    );
};
