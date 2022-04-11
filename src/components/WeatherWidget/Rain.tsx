import * as React from 'react';

import {Box} from '@mui/material';

export interface IRainProps {
    value?: number;
}

export const Rain: React.FC<IRainProps> = (props: IRainProps) => {
    return (
        <Box>
            {props.value}
        </Box>
    );
};
