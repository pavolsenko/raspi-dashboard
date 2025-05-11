import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import { useCrypto } from '../../hooks/useCrypto';
import { AppConfig } from '../../config/appConfig';
import { Error } from '../Widget/Error';
import { Widget } from '../Widget/Widget';
import { CryptoValue } from './CryptoValue';
import { Bitcoin } from './icons/Bitcoin';
import { Ethereum } from './icons/Ethereum';
import { CryptoIcon } from './icons/CryptoIcon';

import { cryptoStyles, cryptoWidgetStyles } from './styles';

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
                <Box sx={cryptoStyles}>
                    <CryptoIcon>
                        <Ethereum />
                    </CryptoIcon>
                    <CryptoValue
                        name={'Ethereum'}
                        value={cryptoStats.ethereum}
                        trendValue={cryptoStats.ethereumTrend}
                    />
                </Box>
                <Box sx={cryptoStyles}>
                    <CryptoIcon>
                        <Bitcoin />
                    </CryptoIcon>
                    <CryptoValue
                        name={'Bitcoin'}
                        value={cryptoStats.bitcoin}
                        trendValue={cryptoStats.bitcoinTrend}
                    />
                </Box>
            </Box>
        </Widget>
    );
}
