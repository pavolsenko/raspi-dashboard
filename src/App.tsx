import { Box, useTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { TimeWidget } from './components/TimeWidget/TimeWidget';
import { WeatherWidget } from './components/WeatherWidget/WeatherWidget';
import { AntiScreenBurn } from './components/Widget/AntiScreenBurn';
import { WienerLinienWidget } from './components/WienerLinienWidget/WienerLinienWidget';
import { CryptoWidget } from './components/CryptoWIdget/CryptoWidget';
import { getTheme } from './helpers/themeHelper';

import { appContainerStyles } from './styles';

export function App() {
    const theme = useTheme();

    return (
        <ThemeProvider theme={getTheme()}>
            <Box sx={appContainerStyles(theme)}>
                <TimeWidget />
                <WienerLinienWidget />
                <WeatherWidget />
                <CryptoWidget />
                <AntiScreenBurn />
            </Box>
        </ThemeProvider>
    );
}
