import * as React from 'react';
import axios from 'axios';

import {AppConfig} from '../config/appConfig';
import {getCurrentValueFromLocalStorage, processCoins, setCurrentValueInLocalStorage} from '../helpers/cryptoHelpers';

export interface ICurrency {
    name?: string;
    symbol?: string;
    iconUrl?: string;
    count?: number;
    priceInEur?: number;
    totalValueInEur?: number;
}

export interface ICryptoStats {
    currentValue: number;
    previousValue: number;
    portfolio: ICurrency[];
}

export const useCrypto = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [isError, setIsError] = React.useState<boolean>(false);

    const [cryptoStats, setCryptoStats] = React.useState<ICryptoStats>({
        currentValue: getCurrentValueFromLocalStorage(),
        previousValue: getCurrentValueFromLocalStorage(),
        portfolio: [],
    });

    const loadCryptoStats = async (): Promise<void> => {
        setIsError(false);
        setIsLoading(true);

        let result: any;
        try {
            result = await axios.get(AppConfig.coinStatsApiEndpoint, {
                params: {
                    token: AppConfig.coinStatsPortfolioToken,
                },
            });
        } catch (Error) {
            setIsError(true);
            setIsLoading(false);
            return;
        }

        setCryptoStats({
            currentValue: result.data.portfolio.p.EUR,
            previousValue: cryptoStats.currentValue,
            portfolio: processCoins(result.data.portfolio.pi),
        });

        setCurrentValueInLocalStorage(cryptoStats.currentValue);

        setIsLoading(false);
    };

    return {
        cryptoStats,
        loadCryptoStats,
        isLoading,
        isError,
    };
};
