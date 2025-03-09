import * as React from 'react';

import { Box } from '@mui/material';
import Icon from '@mdi/react';
import { mdiArrowDown, mdiArrowUp } from '@mdi/js';

interface ICurrentValueProps {
    currentValue: number;
    previousValue: number;
}

export const CurrentValue: React.FC<ICurrentValueProps> = (
    props: ICurrentValueProps,
) => {
    const renderArrow = (): React.ReactNode => {
        if (props.currentValue < props.previousValue) {
            return <Icon path={mdiArrowDown} size={'72px'} />;
        }

        return <Icon path={mdiArrowUp} size={'72px'} />;
    };

    return (
        <Box sx={{ display: 'flex', marginLeft: '-16px' }}>
            <Box sx={{ marginTop: '18px' }}>{renderArrow()}</Box>
            <Box sx={{ fontSize: '72px' }}>
                {Math.floor(props.currentValue)}
            </Box>
            <Box
                sx={{
                    fontSize: '28px',
                    paddingTop: '18px',
                }}
            >
                {(props.currentValue % 1).toString().substring(2, 4) || '00'}
                <Box
                    sx={{
                        fontSize: '28px',
                        marginTop: '-10px',
                        marginLeft: '6px',
                    }}
                >
                    €
                </Box>
            </Box>
        </Box>
    );
};
