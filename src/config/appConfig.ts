export interface IAppConfig {
    openWeatherApiEndpoint: string;
    openWeatherAppId: string;

    coinStatsApiEndpoint: string;
    coinStatsPortfolioToken: string;

    wienerLinienApiEndpoint: string;

    defaultUpdateInterval: number;
}

export const AppConfig: IAppConfig = {
    openWeatherApiEndpoint: 'http://api.openweathermap.org/data/2.5/onecall',
    openWeatherAppId: process.env.REACT_APP_OPENWEATHER_APP_ID || '',

    coinStatsApiEndpoint: 'https://api.coin-stats.com/v2/portfolios/public',
    coinStatsPortfolioToken: process.env.REACT_APP_COINSTATS_PROTFOLIO_TOKEN || '',

    wienerLinienApiEndpoint: 'https://apps.static-access.net/ViennaTransport/monitor/',

    defaultUpdateInterval: 1000 * 60 * 60,
};
