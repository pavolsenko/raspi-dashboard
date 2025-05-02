import { ReactNode, useEffect, useState } from 'react';

import { Box } from '@mui/material';

import { useCrypto } from '../../hooks/useCrypto';
import { AppConfig } from '../../config/appConfig';
import { Error } from '../Widget/Error';
import { Widget } from '../Widget/Widget';
import { CryptoValue } from './CryptoValue';
import { Ethereum } from './icons/Ethereum';
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

    if (isError || !cryptoStats) {
        return <Error />;
    }

    return (
        <Widget>
            <Box sx={cryptoWidgetStyles}>
                <CryptoValue
                    title={'Ethereum'}
                    value={cryptoStats.ethereum}
                    trend={cryptoStats.ethereumTrend}
                />
                <CryptoValue
                    title={'Bitcoin'}
                    value={cryptoStats.bitcoin}
                    trend={cryptoStats.bitcoinTrend}
                />
            </Box>
        </Widget>
    );
}
