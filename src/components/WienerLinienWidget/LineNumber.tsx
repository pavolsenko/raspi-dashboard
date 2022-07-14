import * as React from 'react';

import {Box} from '@mui/material';

interface ILineNumberProps {
    value: string;
}

export const LineNumber: React.FC<ILineNumberProps> = (props: ILineNumberProps) => {
    const getBackgroundColor = () => {
        if (props.value === 'U1') {
            return '#e20210';
        }

        if (props.value === 'U2') {
            return '#935e98';
        }

        if (props.value === 'U3') {
            return '#ef7e00';
        }

        if (props.value === 'U4') {
            return '#079243';
        }

        if (props.value === 'U5') {
            return '#008F96';
        }

        if (props.value === 'U6') {
            return '#a4642c';
        }

        if (props.value.includes('A') || props.value.includes('B')) {
            return '#001c7e';
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
