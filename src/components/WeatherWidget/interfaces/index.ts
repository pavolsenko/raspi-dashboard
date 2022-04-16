export type TUnits = 'metric' | 'imperial';

export interface IWeather {
    daily: Record<string, any>[];
    description?: string;
    icon?: number;
    pop?: number;
    sunrise?: number;
    sunset?: number;
    temp?: number;
    wind_deg?: number;
    wind_speed?: number;
}
