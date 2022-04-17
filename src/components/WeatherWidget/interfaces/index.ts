export type TUnits = 'metric' | 'imperial';

export interface ILatLon {
    lat: number;
    lon: number;
}

export interface IWeather {
    daily: Record<string, any>[];
    description?: string;
    humidity?: number;
    icon?: number;
    pop?: number;
    sunrise?: number;
    sunset?: number;
    temp?: number;
    wind_deg?: number;
    wind_speed?: number;
}
