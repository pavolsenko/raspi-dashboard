import { ReactNode, useEffect, useState } from 'react';

import { Box } from '@mui/material';

import { useCrypto } from '../../hooks/useCrypto';
import { AppConfig } from '../../config/appConfig';
import { CurrencyList } from './CurrencyList';
import { Error } from '../Widget/Error';
import { Widget } from '../Widget/Widget';

import { cryptoWidgetStyles } from './styles';

export function CryptoWidget() {
    const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);

    const { isError, cryptoStats, loadCryptoStats } = useCrypto();

    useEffect(() => {
        if (isInitialLoad) {
            loadCryptoStats();
            setIsInitialLoad(false);
        }

        const interval = setInterval(
            loadCryptoStats,
            AppConfig.defaultUpdateInterval,
        );

        return () => clearInterval(interval);
    }, [loadCryptoStats, isInitialLoad, setIsInitialLoad]);

    function renderCurrencyList(): ReactNode {
        return <CurrencyList currencies={cryptoStats.portfolio} />;
    }

    if (isError || !cryptoStats || cryptoStats.portfolio.length === 0) {
        return <Error />;
    }

    return (
        <Widget>
            <Box sx={cryptoWidgetStyles}>{renderCurrencyList()}</Box>
        </Widget>
    );
}
