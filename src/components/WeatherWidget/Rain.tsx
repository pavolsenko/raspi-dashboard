import * as React from 'react';

import {Box} from '@mui/material';
import UmbrellaIcon from '@mui/icons-material/Umbrella';

export interface IRainProps {
    value?: number;
}

export const Rain: React.FC<IRainProps> = (props: IRainProps) => {
    return (
        <Box>
            <UmbrellaIcon fontSize={'large'}/>
            {(props.value || 0) * 100}%
        </Box>
    );
};
