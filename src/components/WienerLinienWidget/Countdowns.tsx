import * as React from 'react';

import {Box} from '@mui/material';

interface ICountdownsProps {
    values: number[];
}

export const Countdowns: React.FC<ICountdownsProps> = (props: ICountdownsProps) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Box sx={{
                width: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {props.values[0]}
            </Box>

            <Box sx={{
                width: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {props.values[1]}
            </Box>
        </Box>
    );
};
