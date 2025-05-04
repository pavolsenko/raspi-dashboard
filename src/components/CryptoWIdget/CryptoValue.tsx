import { Box, Typography } from '@mui/material';

import { CryptoTrendIcon } from './icons/CryptoTrendIcon';

import {
    cryptoNameStyles,
    cryptoTrendStyles,
    cryptoValueNumberStyles,
    cryptoValueStyles,
} from './styles';

export interface CryptoValueProps {
    value: number;
    trendValue: number;
    name: string;
}

export function CryptoValue(props: CryptoValueProps) {
    return (
        <Box sx={cryptoValueStyles}>
            <Typography
                component={Box}
                variant={'body2'}
                color={'secondary'}
                sx={cryptoNameStyles}
            >
                {props.name}
            </Typography>
            <Typography
                variant={'body2'}
                component={Box}
                sx={cryptoValueNumberStyles}
            >
                €{props.value.toFixed(2)}
            </Typography>
            <Typography
                component={Box}
                variant={'body2'}
                color={'secondary'}
                sx={cryptoTrendStyles(props.trendValue)}
            >
                <CryptoTrendIcon trendValue={props.trendValue} />
                <Box>{props.trendValue.toFixed(2)}</Box>
            </Typography>
        </Box>
    );
}
