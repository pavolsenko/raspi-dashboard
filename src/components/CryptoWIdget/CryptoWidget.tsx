import * as React from 'react';

import {Alert, Box, CircularProgress} from '@mui/material';

import {useCrypto} from './hooks/useCrypto';
import {AppConfig} from '../../config/appConfig';

export const CryptoWidget = () => {
    const [isInitialLoad, setIsInitialLoad] = React.useState<boolean>(true);

    const {
        isError,
        isLoading,
        cryptoStats,
        loadCryptoStats,
    } = useCrypto();

    React.useEffect(() => {
        if (isInitialLoad) {
            (async () => await loadCryptoStats())();
            setIsInitialLoad(false);
        }

        const interval = setInterval(
            async () => await loadCryptoStats(),
            AppConfig.defaultUpdateInterval,
        );

        return () => clearInterval(interval);
    }, [loadCryptoStats, isInitialLoad, setIsInitialLoad]);

    if (isLoading) {
        return (
            <CircularProgress/>
        );
    }

    if (isError) {
        return (
            <Alert severity={'error'}>Sorry, something went wrong</Alert>
        );
    }

    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Box sx={{
                width: '100%',
                backgroundColor: '#01B0F1',
            }}>
                {cryptoStats?.portfolio.p.EUR.toFixed(2)}
            </Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: '#ffffff',
                color: '#333333',
            }}>
                test
            </Box>
        </Box>
    );
};
