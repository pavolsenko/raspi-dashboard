import * as React from 'react';
import {useCrypto} from './hooks/useCrypto';
import {Alert, CircularProgress} from '@mui/material';
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
        <>
            {cryptoStats?.portfolio.p.EUR.toFixed(2)}
        </>
    );
}
