import { AxiosRequestConfig } from 'axios';
import { AppConfig } from '../config/appConfig';

export const setCurrencyValueInLocalStorage = (
    currency: string,
    value: number = 0,
) => {
    localStorage.setItem(currency, value.toString());
};

export const getCurrencyValueFromLocalStorage = (currency: string): number => {
    return parseFloat(localStorage.getItem(currency) || '1') || 1;
};

export const coinStatsOptions: AxiosRequestConfig = {
    headers: {
        'X-API-KEY': AppConfig.coinStatsApiKey,
    },
    params: {
        currency: 'EUR',
    },
};
