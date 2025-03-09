import { ICurrency } from '../interfaces';

const LOCAL_STORAGE_CRYPTO_KEY: string = 'crypto_value';
const LOCAL_STORAGE_CURRENCY_KEY: string = 'crypto_currency';

export const getCryptoValueFromLocalStorage = (): number => {
    return (
        parseFloat(localStorage.getItem(LOCAL_STORAGE_CRYPTO_KEY) || '0') || 0
    );
};

export const setCryptoValueInLocalStorage = (value: number = 0) => {
    localStorage.setItem(LOCAL_STORAGE_CRYPTO_KEY, value.toString());
};

export const setCurrencyValueInLocalStorage = (value: number = 0) => {
    localStorage.setItem(LOCAL_STORAGE_CURRENCY_KEY, value.toString());
};

export const getCurrencyValueFromLocalStorage = (): number => {
    return (
        parseFloat(localStorage.getItem(LOCAL_STORAGE_CURRENCY_KEY) || '1') || 1
    );
};

export const processCoins = (
    portfolio?: Record<string, any>[],
    exchangeRate: number = 1,
): ICurrency[] => {
    if (!portfolio) {
        return [];
    }

    return portfolio
        .map((item: Record<string, any>): ICurrency => {
            const eurValue = item.p?.EUR
                ? item.p?.EUR
                : item.p?.USD * exchangeRate;

            return {
                name: item.coin?.n,
                symbol: item.coin?.s,
                iconUrl: item.coin?.ic,
                count: item.c,
                priceInEur: eurValue,
                totalValueInEur: eurValue * item.c,
            };
        })
        .filter((item: ICurrency): boolean => Boolean(item.totalValueInEur))
        .sort(
            (a: ICurrency, b: ICurrency): number =>
                (b.totalValueInEur || 0) - (a.totalValueInEur || 0),
        );
};
