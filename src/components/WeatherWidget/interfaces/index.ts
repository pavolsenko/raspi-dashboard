export type TUnits = 'metric' | 'imperial';

export interface IWeather {
    description?: string;
    icon?: number;
    pop?: number;
    sunrise?: number;
    sunset?: number;
    temperature?: number;
    wind_deg?: number;
    wind_speed?: number;
}
