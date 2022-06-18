import * as React from 'react';

import {Box, styled} from '@mui/material';

interface ICountdownsProps {
    values: number[];
}

const Keyframes = styled(Box)({
    '@keyframes blink': {
        '50%': {opacity: 0},
    },
});

export const Countdowns: React.FC<ICountdownsProps> = (props: ICountdownsProps) => {
    const renderCountdown = (value: number): React.ReactNode => {
        if (value === 0) {
            return (
                <Keyframes sx={{animation: '1s blink infinite'}}>•</Keyframes>
            );
        }

        return value;
    };

    return (
        <Box sx={{
            display: 'flex',
            fontSize: '22px',
        }}>
            <Box sx={{
                width: '38px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {renderCountdown(props.values[0])}
            </Box>

            <Box sx={{
                width: '38px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {renderCountdown(props.values[1])}
            </Box>
        </Box>
    );
};
