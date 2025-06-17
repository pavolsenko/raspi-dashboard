import { Box, useTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { TimeWidget } from '@app/components/TimeWidget/TimeWidget';
import { WeatherWidget } from '@app/components/WeatherWidget/WeatherWidget';
import { AntiScreenBurn } from '@app/components/Widget/AntiScreenBurn';
import { WienerLinienWidget } from '@app/components/WienerLinienWidget/WienerLinienWidget';
import { CryptoWidget } from '@app/components/CryptoWIdget/CryptoWidget';
import { getTheme } from '@app/helpers/themeHelper';

import '@fontsource/nunito/latin-400.css';
import { appContainerStyles } from './appStyles';

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
