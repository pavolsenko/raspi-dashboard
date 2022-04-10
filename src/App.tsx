import React from 'react';

import {Box, SxProps, useTheme} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import {themeConfig} from './config/themeConfig';
import {WeatherWidget} from './components/WeatherWidget/WeatherWidget';
import {WienerLinienWidget} from './components/WienerLinienWidget/WienerLinienWidget';
import {CryptoWidget} from './components/CryptoWIdget/CryptoWidget';

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
        fontFamily: '"Open Sans"',
        fontWeight: 300,
    };

    const boxStyle: SxProps = {
        width: '400px',
        height: DISPLAY_HEIGHT - 20,
    };

    return (
        <ThemeProvider theme={createTheme(themeConfig)}>
            <Box sx={containerStyle}>
                <Box sx={boxStyle}>
                    <WeatherWidget/>
                </Box>

                <Box sx={boxStyle}>
                    <WienerLinienWidget/>
                </Box>

                <Box sx={boxStyle}>
                    <CryptoWidget/>
                </Box>
            </Box>
        </ThemeProvider>
    );
};
