import * as React from 'react';
import axios from 'axios';

import {AppConfig} from '../../../config/appConfig';
import {ICryptoStats} from '../interfaces';

export const useCrypto = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [isError, setIsError] = React.useState<boolean>(false);

    const [cryptoStats, setCryptoStats] = React.useState<ICryptoStats>({
        currentValue: 0,
        previousValue: 0,
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
            portfolio: result.data.portfolio.pi,
        });

        setIsLoading(false);
    };

    return {
        cryptoStats,
        loadCryptoStats,
        isLoading,
        isError,
    };
};
