import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import { useCrypto } from '@app/hooks/useCrypto';
import { appConfig } from '@app/config/appConfig';
import { Error } from '@app/components/Widget/Error';
import { Widget } from '@app/components/Widget/Widget';
import { CryptoValue } from '@app/components/CryptoWIdget/CryptoValue';
import { Bitcoin } from '@app/components/CryptoWIdget/icons/Bitcoin';
import { Ethereum } from '@app/components/CryptoWIdget/icons/Ethereum';
import { CryptoIcon } from '@app/components/CryptoWIdget/icons/CryptoIcon';

import { cryptoStyles, cryptoWidgetStyles } from './cryptoStyles';

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
            appConfig.defaultUpdateInterval,
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
