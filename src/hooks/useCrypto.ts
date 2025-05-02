import axios from 'axios';
import * as React from 'react';

import { AppConfig } from '../config/appConfig';
import { coinStatsOptions } from '../helpers/cryptoHelpers';

export interface ICryptoStats {
    ethereum: number;
    ethereumTrend: 'up' | 'down';
    bitcoin: number;
    bitcoinTrend: 'up' | 'down';
}

export function useCrypto() {
    const [isError, setIsError] = React.useState<boolean>(false);
    const [cryptoStats, setCryptoStats] = React.useState<ICryptoStats>();

    async function loadCryptoStats(): Promise<void> {
        setIsError(false);

        let resultEthereum: any;
        let resultBitcoin: any;
        try {
            resultEthereum = await axios.get(
                AppConfig.coinStatsApiEndpoint + 'ethereum',
                coinStatsOptions,
            );

            resultBitcoin = await axios.get(
                AppConfig.coinStatsApiEndpoint + 'bitcoin',
                coinStatsOptions,
            );
        } catch (Error) {
            setIsError(true);
            return;
        }

        setCryptoStats({
            ethereum: resultEthereum.data.price,
            ethereumTrend:
                resultEthereum.data.priceChange1w > 0 ? 'up' : 'down',
            bitcoin: resultBitcoin.data.price,
            bitcoinTrend: resultBitcoin.data.priceChange1w > 0 ? 'up' : 'down',
        });
    }

    return {
        cryptoStats,
        loadCryptoStats,
        isError,
    };
}
