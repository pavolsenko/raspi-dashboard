import { Box, Typography } from '@mui/material';

import { CryptoTrendIcon } from '@app/components/CryptoWidget/icons/CryptoTrendIcon';

import {
    cryptoNameStyles,
    cryptoTrendStyles,
    cryptoValueNumberStyles,
    cryptoValueStyles,
} from './cryptoStyles';

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
                <Box>{props.trendValue.toFixed(2).replace('-', '')}%</Box>
            </Typography>
        </Box>
    );
}
