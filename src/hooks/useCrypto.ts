import * as React from 'react';
import axios from 'axios';

import { AppConfig } from '../config/appConfig';
import { getCryptoValueFromLocalStorage, processCoins, setCryptoValueInLocalStorage } from '../helpers/cryptoHelpers';
import { useCurrency } from './useCurrency';
import { ICurrency } from '../interfaces';

export interface ICryptoStats {
    currentValue: number;
    previousValue: number;
    portfolio: ICurrency[];
}

export function useCrypto() {
    const [isError, setIsError] = React.useState<boolean>(false);

    const [cryptoStats, setCryptoStats] = React.useState<ICryptoStats>({
        currentValue: getCryptoValueFromLocalStorage(),
        previousValue: getCryptoValueFromLocalStorage(),
        portfolio: [],
    });

    const { getUsdToEurExchangeRate } = useCurrency();

    async function loadCryptoStats(): Promise<void> {
        setIsError(false);

        let result: any;
        try {
            result = await axios.get(AppConfig.coinStatsApiEndpoint, {
                params: {
                    token: AppConfig.coinStatsPortfolioToken,
                },
            });
        } catch (Error) {
            setIsError(true);
            return;
        }

        const exchangeRate = await getUsdToEurExchangeRate();

        setCryptoStats({
            currentValue: result.data.portfolio.p.EUR < 1 ? (result.data.portfolio.p.USD * exchangeRate) : result.data.portfolio.p.EUR,
            previousValue: cryptoStats.currentValue,
            portfolio: processCoins(result.data.portfolio.pi, exchangeRate),
        });

        setCryptoValueInLocalStorage(cryptoStats.currentValue);
    }

    return {
        cryptoStats,
        loadCryptoStats,
        isError,
    };
}
