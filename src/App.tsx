import { Box, useTheme } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { WeatherWidget } from './components/WeatherWidget/WeatherWidget';
import { WienerLinienWidget } from './components/WienerLinienWidget/WienerLinienWidget';
import { CryptoWidget } from './components/CryptoWIdget/CryptoWidget';
import {
    WIDGET1_BACKGROUND_COLOR,
    WIDGET2_BACKGROUND_COLOR,
    WIDGET3_BACKGROUND_COLOR,
} from './config/appConfig';

import { appContainerStyles, appWidgetBoxStyles } from './styles';

export function App() {
    const theme = useTheme();

    return (
        <ThemeProvider theme={createTheme()}>
            <Box sx={appContainerStyles(theme)}>
                <Box sx={appWidgetBoxStyles}>
                    <WeatherWidget
                        headerBackgroundColor={WIDGET1_BACKGROUND_COLOR}
                    />
                </Box>

                <Box sx={appWidgetBoxStyles}>
                    <WienerLinienWidget
                        headerBackgroundColor={WIDGET2_BACKGROUND_COLOR}
                    />
                </Box>

                <Box sx={appWidgetBoxStyles}>
                    <CryptoWidget
                        headerBackgroundColor={WIDGET3_BACKGROUND_COLOR}
                    />
                </Box>
            </Box>
        </ThemeProvider>
    );
}
