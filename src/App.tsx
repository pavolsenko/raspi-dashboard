import React from 'react';

import {Box, SxProps, useTheme} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import {themeConfig} from './config/themeConfig';
import {WeatherWidget} from './components/WeatherWidget/WeatherWidget';
import {WienerLinienWidget} from './components/WienerLinienWidget/WienerLinienWidget';
import {CryptoWidget} from './components/CryptoWIdget/CryptoWidget';

export const DISPLAY_HEIGHT = 690;
export const DISPLAY_WIDTH = 1280;

export const App: React.FC = () => {
    const theme = useTheme();

    const containerStyle: SxProps = {
        width: DISPLAY_WIDTH,
        height: DISPLAY_HEIGHT,
        background: 'linear-gradient(45deg, #56A3A6 25%, #4F6D7A 85%)',
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(2),
        fontFamily: '"Open Sans"',
        fontWeight: 300,
    };

    const boxStyle: SxProps = {
        width: '415px',
        height: DISPLAY_HEIGHT - 5,
    };

    return (
        <ThemeProvider theme={createTheme(themeConfig)}>
            <Box sx={containerStyle}>
                <Box sx={boxStyle}>
                    <WeatherWidget headerBackgroundColor={'#084C61'}/>
                </Box>

                <Box sx={boxStyle}>
                    <WienerLinienWidget headerBackgroundColor={'#DB504A'}/>
                </Box>

                <Box sx={boxStyle}>
                    <CryptoWidget headerBackgroundColor={'#E3B505'}/>
                </Box>
            </Box>
        </ThemeProvider>
    );
};
