import { Box, Typography } from '@mui/material';

interface LineDirectionProps {
    direction: string;
}

export function LineDirection(props: LineDirectionProps) {
    return (
        <Typography variant={'body2'} color={'secondary'} component={Box}>
            {props.direction.includes(',')
                ? props.direction.split(',')[0]
                : props.direction.split(' ')[0]}
        </Typography>
    );
}
