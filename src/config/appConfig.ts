export interface IAppConfig {
    openWeatherApiEndpoint: string;
    openWeatherAppId: string;

    coinStatsApiEndpoint: string;
    coinStatsPortfolioToken: string;

    wienerLinienApiEndpoint: string;
    wienerLinienApiUpdateInterval: number;
    wienerLinienTimetableUpdateInterval: number;

    exchangeRateApiEndpoint: string;
    exchangeRateApiToken: string;

    defaultUpdateInterval: number;
}

export const AppConfig: IAppConfig = {
    openWeatherApiEndpoint: 'http://api.openweathermap.org/data/2.5/onecall',
    openWeatherAppId: process.env.REACT_APP_OPENWEATHER_APP_ID || '',

    coinStatsApiEndpoint: 'https://api.coin-stats.com/v2/portfolios/public',
    coinStatsPortfolioToken: process.env.REACT_APP_COINSTATS_PROTFOLIO_TOKEN || '',

    wienerLinienApiEndpoint: 'https://vtapi.floscodes.net/monitor/',
    wienerLinienApiUpdateInterval: 1000 * 65,
    wienerLinienTimetableUpdateInterval: 1000 * 25,

    exchangeRateApiEndpoint: 'https://api.apilayer.com/exchangerates_data/latest?base=USD&symbols=EUR',
    exchangeRateApiToken: process.env.REACT_APP_EXCHANGE_RATE_PROTFOLIO_TOKEN || '',

    defaultUpdateInterval: 1000 * 60 * 60,
};
