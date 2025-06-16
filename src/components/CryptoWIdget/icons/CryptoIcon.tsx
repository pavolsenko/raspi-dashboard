import { PropsWithChildren } from 'react';
import { Box } from '@mui/material';

import { cryptoIconStyles } from './iconStyles';

export function CryptoIcon(props: PropsWithChildren) {
    return <Box sx={cryptoIconStyles}>{props.children}</Box>;
}
