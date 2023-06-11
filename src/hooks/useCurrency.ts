import axios from "axios";

import {AppConfig} from "../config/appConfig";
import {getCurrencyValueFromLocalStorage, setCurrencyValueInLocalStorage} from "../helpers/cryptoHelpers";

export const useCurrency = () => {

    const getUsdToEurExchangeRate = async (): Promise<number> =>
    {
        const cachedValue = getCurrencyValueFromLocalStorage();

        let result;
        try {
            result = await axios.get(AppConfig.exchangeRateApiEndpoint, {
                headers: {
                    apikey: AppConfig.exchangeRateApiToken,
                },
            });
        } catch (Error) {
            return cachedValue || 1;
        }

        if (!result) {
            return cachedValue || 1;
        }

        const currencyValue = result?.data?.rates?.EUR || cachedValue || 1;
        setCurrencyValueInLocalStorage(currencyValue);
        return currencyValue;
    }

    return {
        getUsdToEurExchangeRate,
    }
}