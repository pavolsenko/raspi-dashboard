import * as React from 'react';

import {Box, CircularProgress} from '@mui/material';

export const Loading: React.FC = () => {
    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <CircularProgress color={'inherit'}/>
        </Box>
    );
}
