import * as React from 'react';
import axios from 'axios';

import {AppConfig} from '../../../config/appConfig';

export const useCrypto = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [isError, setIsError] = React.useState<boolean>(false);

    const [cryptoStats, setCryptoStats] = React.useState<Record<string, any> | undefined>();

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

        setCryptoStats(result.data);

        setIsLoading(false);
    };

    return {
        cryptoStats,
        loadCryptoStats,
        isLoading,
        isError,
    };
};
