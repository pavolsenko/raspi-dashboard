import { Box, Typography } from '@mui/material';

export interface CryptoNameProps {
    name: string;
}

export function CryptoName(props: CryptoNameProps) {
    return (
        <Typography component={Box} variant={'body2'} color={'secondary'}>
            {props.name}
        </Typography>
    );
}
