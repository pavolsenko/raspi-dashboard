import { AxiosRequestConfig } from 'axios';

import { AppConfig } from '../config/appConfig';

export const coinStatsOptions: AxiosRequestConfig = {
    headers: {
        'X-API-KEY': AppConfig.coinStatsApiKey,
    },
    params: {
        currency: 'EUR',
    },
};
