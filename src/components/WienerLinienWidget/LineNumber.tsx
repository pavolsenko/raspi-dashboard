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
            width: '38px',
            height: '38px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: getBackgroundColor(),
            color: '#ffffff',
            fontSize: '18px',
            borderRadius: '4px',
        }}>
            {props.value}
        </Box>
    );
};
