import axios from 'axios';
import { useState } from 'react';

import { appConfig } from '@app/config/appConfig';
import { coinStatsOptions } from '@app/helpers/cryptoHelpers';
import { CryptoStats } from '@app/interfaces/crypto';

export interface UseCrypto {
    cryptoStats?: CryptoStats;
    loadCryptoStats: () => void;
    isError: boolean;
}

export function useCrypto(): UseCrypto {
    const [isError, setIsError] = useState<boolean>(false);
    const [cryptoStats, setCryptoStats] = useState<CryptoStats>();

    async function loadCryptoStats(): Promise<void> {
        setIsError(false);

        let resultEthereum: any;
        let resultBitcoin: any;
        try {
            resultEthereum = await axios.get(
                appConfig.coinStatsApiEndpoint + 'ethereum',
                coinStatsOptions,
            );

            resultBitcoin = await axios.get(
                appConfig.coinStatsApiEndpoint + 'bitcoin',
                coinStatsOptions,
            );
        } catch (Error) {
            setIsError(true);
            return;
        }

        setCryptoStats({
            ethereum: resultEthereum.data.price,
            ethereumTrend: resultEthereum.data.priceChange1w,
            bitcoin: resultBitcoin.data.price,
            bitcoinTrend: resultBitcoin.data.priceChange1w,
        });
    }

    return {
        cryptoStats,
        loadCryptoStats,
        isError,
    };
}
