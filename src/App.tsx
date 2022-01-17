import React from 'react';

import {Grid, Typography} from '@mui/material';

import {Weather} from './components/Weather';


export const App: React.FC = () => {
    const containerStyle = {
        width: 1280,
        height: 400,
        backgroundColor: 'black',
        color: 'white',
    };

    const middleItemStyle = {
        borderLeft: '1px solid white',
        borderRight: '1px solid white',
    };

    return (
        <Grid container sx={containerStyle}>
            <Grid item sm={4}>
                <Weather
                    location={'Vienna, Austria'}
                    units={'metric'}
                />
            </Grid>

            <Grid item sm={4} sx={middleItemStyle}>
                lorem ipsum

                <Typography variant={'h2'} component={'div'}>Tu by mohli byt wiener linien odchody</Typography>
            </Grid>

            <Grid item sm={4}>
                lorem ipsum
                <Typography variant={'h2'} component={'div'}>tu by mohlo byt crypto</Typography>
            </Grid>
        </Grid>
    );
};
