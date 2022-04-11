import * as React from 'react';

import {Box} from '@mui/material';

export interface IWindProps {
    direction?: number;
    speed?: number;
}

export const Wind: React.FC<IWindProps> = (props: IWindProps) => {
    return (
        <Box>
            {props.direction}/
            {props.speed}
        </Box>
    );
};
