import axios from "axios";

import {AppConfig} from "../config/appConfig";

export const useCurrency = () => {

    const getUsdToEurExchangeRate = async (): Promise<number> =>
    {
        let result;
        try {
            result = await axios.get(AppConfig.exchangeRateApiEndpoint, {
                headers: {
                    apikey: AppConfig.exchangeRateApiToken,
                },
            });
        } catch (Error) {
            return 1;
        }

        if (!result) {
            return 1;
        }

        return result?.data?.rates?.EUR || 1;
    }

    return {
        getUsdToEurExchangeRate,
    }
}