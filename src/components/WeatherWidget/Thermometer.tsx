import * as React from 'react';

import {Box} from '@mui/material';

interface IThermometerProps {
    low: number;
    high: number;
    height?: number;
}

const DEFAULT_HEIGHT = 8;

const LOWER_LIMIT = 0; // °C
const HIGHER_LIMIT = 35; // °C

export const Thermometer: React.FC<IThermometerProps> = (props: IThermometerProps) => {
    const getWidth = (value: number): number => {
        const total = (LOWER_LIMIT * -1) + HIGHER_LIMIT;

        const width = value + (LOWER_LIMIT * -1);

        return width / (total / 100) - 1;
    };

    return (
        <Box sx={{
            background: 'linear-gradient(132deg, rgba(75,168,213,1) 20%, rgba(17,172,38,1) 40%, rgba(200,179,10,1) 60%, rgba(228,68,68,1) 80%);',
            minWidth: '200px',
            height: (props.height || DEFAULT_HEIGHT) + 'px',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 0 8px #dddddd',
            display: 'flex',
            justifyContent: 'space-between',
        }}>
            <Box sx={{
                width: getWidth(props.low).toString() + '%',
                background: '#ffffff',
                height: (props.height || DEFAULT_HEIGHT) + 'px',
            }}>
            </Box>

            <Box sx={{
                height: (props.height || DEFAULT_HEIGHT) + 'px',
                flexGrow: 1,
                border: '8px solid white',
                borderRadius: '16px',
                position: 'relative',
                top: '-8px',
            }}>
            </Box>

            <Box sx={{
                width: (100 - getWidth(props.high)).toString() + '%',
                background: '#ffffff',
                height: (props.height || DEFAULT_HEIGHT) + 'px',
            }}>
            </Box>
        </Box>
    );
};
