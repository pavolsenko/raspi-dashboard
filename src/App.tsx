import React from 'react';

import {Grid} from '@mui/material';

import {Weather} from './components/Weather';

export const App: React.FC = () => {
    return (
        <Grid container>
            <Grid item sm={4}>
                <Weather
                    location={'Vienna, Austria'}
                    units={'metric'}
                />
            </Grid>

            <Grid item sm={4}>
                lorem ipsum
            </Grid>

            <Grid item sm={4}>
                lorem ipsum
            </Grid>
        </Grid>
    );
}
