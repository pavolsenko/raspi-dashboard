import * as React from 'react';

import {Box} from '@mui/material';

interface ILineNumberProps {
    value: string;
}

export const LineNumber: React.FC<ILineNumberProps> = (props: ILineNumberProps) => {
    const getBackgroundColor = () => {
        if (props.value.includes('A') || props.value.includes('B')) {
            return '#001C7E';
        }

        return '#cc0000';
    };

    return (
        <Box sx={{
            width: '28px',
            height: '28px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: getBackgroundColor(),
            color: '#ffffff',
            fontSize: '14px',
            borderRadius: '4px',
        }}>
            {props.value}
        </Box>
    );
};
