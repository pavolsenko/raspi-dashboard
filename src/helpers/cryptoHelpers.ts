import { AxiosRequestConfig } from 'axios';

import { appConfig } from '@app/config/appConfig';

export const coinStatsOptions: AxiosRequestConfig = {
    headers: {
        'X-API-KEY': appConfig.coinStatsApiKey,
    },
    params: {
        currency: 'EUR',
    },
};
