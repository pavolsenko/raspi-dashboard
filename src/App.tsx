import React from 'react';

import {Box, SxProps, Typography, useTheme} from '@mui/material';

import {Weather} from './components/Weather';
import {WienerLinien} from './components/WienerLinien';

import {createTheme, ThemeProvider} from '@mui/material/styles';
import {themeConfig} from './config/themeConfig';

export const DISPLAY_HEIGHT = 720;
export const DISPLAY_WIDTH = 1280;

export const App: React.FC = () => {
    const theme = useTheme();

    const containerStyle: SxProps = {
        width: DISPLAY_WIDTH,
        height: DISPLAY_HEIGHT,
        backgroundColor: '#000000',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(2),
    };

    const boxStyle: SxProps = {
        width: 400,
        height: DISPLAY_HEIGHT - 20,
        border: '2px solid #101010',
        borderRadius: '5px',
        backgroundColor: '#191C24',
        margin: '10px',
        fontFamily: 'Lato',
    };

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
        </ThemeProvider>
    );
};
