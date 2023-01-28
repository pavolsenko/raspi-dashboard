import * as React from 'react';
import {Box} from '@mui/material';

export interface ITemperatureProps {
    value?: number;
}

export const CurrentTemperature: React.FC<ITemperatureProps> = (props: ITemperatureProps) => {
    const getValue = () => {
        if (!props.value) {
            return 0;
        }

        return props.value < 0 ? Math.floor(props.value) : Math.ceil(props.value);
    }
    return (
        <Box sx={{display: 'flex'}}>
            <Box sx={{fontSize: '72px'}}>
                {getValue()}
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
