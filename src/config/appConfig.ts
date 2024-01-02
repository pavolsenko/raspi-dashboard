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
    openWeatherApiEndpoint: 'https://api.openweathermap.org/data/2.5/onecall',
    openWeatherAppId: process.env.REACT_APP_OPENWEATHER_APP_ID || '',

    coinStatsApiEndpoint: 'https://api.coin-stats.com/v2/portfolios/public',
    coinStatsPortfolioToken: process.env.REACT_APP_COINSTATS_PORTFOLIO_TOKEN || '',

    wienerLinienApiEndpoint: 'https://vtapi.floscodes.net/monitor/',
    wienerLinienApiUpdateInterval: 1000 * 90,
    wienerLinienTimetableUpdateInterval: 1000 * 25,

    exchangeRateApiEndpoint: 'https://api.apilayer.com/exchangerates_data/latest?base=USD&symbols=EUR',
    exchangeRateApiToken: process.env.REACT_APP_EXCHANGE_RATE_TOKEN || '',

    defaultUpdateInterval: 1000 * 60 * 60,
};

export const DISPLAY_HEIGHT = 740;
export const DISPLAY_WIDTH = 1280;

export const WIDGET1_BACKGROUND_COLOR = '#084c61';
export const WIDGET2_BACKGROUND_COLOR = '#db504a';
export const WIDGET3_BACKGROUND_COLOR = '#e3b505';