import * as React from 'react';
import { Box, Typography } from '@mui/material';

interface ILineDirectionProps {
    direction: string;
}

export const LineDirection: React.FC<ILineDirectionProps> = (
    props: ILineDirectionProps,
) => {
    return (
        <Typography variant={'body2'} color={'secondary'} component={Box}>
            {props.direction.includes(',')
                ? props.direction.split(',')[0]
                : props.direction.split(' ')[0]}
        </Typography>
    );
};
