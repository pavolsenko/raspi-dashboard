import React from 'react';

import {Box, Button, Typography} from '@mui/material';

import {Weather} from './components/Weather';
import {WienerLinien} from './components/WienerLinien';
import {Fade} from './transition-test/Fade';
import TestCard from './transition-test/TestCard';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {themeConfig} from './config/themeConfig';

export const DISPLAY_HEIGHT = 400;
export const DISPLAY_WIDTH = 1280;

export const App: React.FC = () => {
    const containerStyle = {
        width: DISPLAY_WIDTH,
        height: DISPLAY_HEIGHT,
        backgroundColor: '#1d1d1d',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
    };

    const boxStyle = {
        width: 400,
        height: DISPLAY_HEIGHT - 20,
        border: '2px solid #101010',
        borderRadius: '5px',
        background: 'linear-gradient(0.15turn, #030303, #282828)',
        margin: '10px',
        fontFamily: 'Lato',
    };

    const [inProp, setInProp] = React.useState<boolean>(false);

    return (
        <ThemeProvider theme={createTheme(themeConfig)}>
            <Box sx={containerStyle}>
                <Box sx={boxStyle}>
                    <Weather
                        location={'Vienna, Austria'}
                        units={'metric'}
                    />
                </Box>

                <Box sx={boxStyle}>
                    <WienerLinien/>
                </Box>

                <Box sx={boxStyle}>
                    lorem ipsum
                    <Typography variant={'h2'} component={'div'}>tu by mohlo byt crypto</Typography>
                </Box>
            </Box>

            <Box sx={{margin: 40}}>
                <Button variant={'contained'} onClick={() => setInProp(!inProp)}>click me</Button>
                <Fade in={inProp}>
                    <TestCard/>
                </Fade>
            </Box>
        </ThemeProvider>
    );
};
