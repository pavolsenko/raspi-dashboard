import * as React from 'react';

import {Box} from '@mui/material';

import {
    DEFAULT_HIGHER_LIMIT_TEMPERATURE,
    DEFAULT_LOWER_LIMIT_TEMPERATURE,
    DEFAULT_TEMPERATURE_OFFSET
} from '../../config/weatherConfig';

interface IThermometerProps {
    low: number;
    high: number;
    height?: number;
    lowerLimit?: number;
    higherLimit?: number;
}

const DEFAULT_HEIGHT = 10;

export const Thermometer: React.FC<IThermometerProps> = (props: IThermometerProps) => {
    const getWidth = (value: number): number => {
        const lowerLimit = (props.lowerLimit || DEFAULT_LOWER_LIMIT_TEMPERATURE) * -1;
        const higherLimit = props.higherLimit || DEFAULT_HIGHER_LIMIT_TEMPERATURE;
        const total = lowerLimit + higherLimit;
        const width = value + lowerLimit;
        return width / (total / 100) - DEFAULT_TEMPERATURE_OFFSET;
    };

    return (
        <Box sx={{
            background: 'linear-gradient(132deg, rgba(75,168,213,1) 20%, rgba(17,172,38,1) 40%, rgba(200,179,10,1) 60%, rgba(228,68,68,1) 80%);',
            minWidth: '200px',
            height: (props.height || DEFAULT_HEIGHT) + 'px',
            borderRadius: Math.ceil((props.height || DEFAULT_HEIGHT) * 2) + 'px',
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
                position: 'relative',
                top: '-8px',
                border: '8px solid white',
                borderRadius: Math.ceil((props.height || DEFAULT_HEIGHT) * 2) + 'px',
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
