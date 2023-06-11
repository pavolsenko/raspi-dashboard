import {ICurrency} from "../interfaces";

const LOCAL_STORAGE_CRYPTO_KEY: string = 'crypto_value'
const LOCAL_STORAGE_CURRENCY_KEY: string = 'crypto_currency'

export const getCryptoValueFromLocalStorage = () => {
    return parseFloat(localStorage.getItem(LOCAL_STORAGE_CRYPTO_KEY) || '0') || 0;
};

export const setCryptoValueInLocalStorage = (value: number = 0) => {
    localStorage.setItem(LOCAL_STORAGE_CRYPTO_KEY, value.toString());
};

export const setCurrencyValueInLocalStorage = (value: number = 0) => {
    localStorage.setItem(LOCAL_STORAGE_CURRENCY_KEY, value.toString());
};

export const getCurrencyValueFromLocalStorage = () => {
    return parseFloat(localStorage.getItem(LOCAL_STORAGE_CURRENCY_KEY) || '0') || 0;
};

export const processCoins = (portfolio?: Record<string, any>[], exchangeRate: number = 1): ICurrency[] => {
    if (!portfolio) {
        return [];
    }

    return portfolio
        .map((item: Record<string, any>): ICurrency => {
            const eurValue = item.p?.EUR ? item.p?.EUR : item.p?.USD * exchangeRate;

            return {
                name: item.coin?.n,
                symbol: item.coin?.s,
                iconUrl: item.coin?.ic,
                count: item.c,
                priceInEur: eurValue,
                totalValueInEur: eurValue * item.c,
            };
        })
        .filter((item: ICurrency) => Boolean(item.totalValueInEur))
        .sort((a: ICurrency, b: ICurrency): number => (b.totalValueInEur || 0) - (a.totalValueInEur || 0));
};
