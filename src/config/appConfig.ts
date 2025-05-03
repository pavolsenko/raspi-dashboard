export interface IAppConfig {
    openWeatherApiEndpoint: string;
    openWeatherAppId: string;

    coinStatsApiEndpoint: string;
    coinStatsApiKey: string;

    wienerLinienApiEndpoint: string;
    wienerLinienApiUpdateInterval: number;
    wienerLinienTimetableUpdateInterval: number;

    exchangeRateApiEndpoint: string;
    exchangeRateApiToken: string;

    defaultUpdateInterval: number;
}

export const AppConfig: IAppConfig = {
    openWeatherApiEndpoint: 'https://api.openweathermap.org/data/3.0/onecall',
    // @ts-ignore
    openWeatherAppId: import.meta.env.VITE_OPENWEATHER_APP_ID || '',

    coinStatsApiEndpoint: 'https://openapiv1.coinstats.app/coins/',
    coinStatsApiKey:
        // @ts-ignore
        import.meta.env.VITE_COINSTATS_API_KEY || '',

    wienerLinienApiEndpoint: 'https://vtapi.floscodes.net/monitor/',
    wienerLinienApiUpdateInterval: 1000 * 45,
    wienerLinienTimetableUpdateInterval: 1000 * 25,

    exchangeRateApiEndpoint:
        'https://api.apilayer.com/exchangerates_data/latest?base=USD&symbols=EUR',
    // @ts-ignore
    exchangeRateApiToken: import.meta.env.VITE_EXCHANGE_RATE_TOKEN || '',

    defaultUpdateInterval: 1000 * 60 * 60,
};
