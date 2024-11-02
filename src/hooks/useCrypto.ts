import * as React from 'react';

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
     /*   const exchangeRate = await getUsdToEurExchangeRate();

        sdk.auth(AppConfig.coinStatsPortfolioToken);
        sdk.getPortfolioCoins({sharetoken: 'ZlBDSlLodnesGt4'})
            .then(({ data }: Record<string, any>) => {
                setCryptoStats({
                    currentValue: data.portfolio.p.EUR < 1 ? (data.portfolio.p.USD * exchangeRate) : data.portfolio.p.EUR,
                    previousValue: cryptoStats.currentValue,
                    portfolio: processCoins(data.portfolio.pi, exchangeRate),
                });
            })
            .catch(err => {
                setIsError(true);
            });
        setCryptoValueInLocalStorage(cryptoStats.currentValue);*/
    }

    return {
        cryptoStats,
        loadCryptoStats,
        isError,
    };
}
