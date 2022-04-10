export type TUnits = 'metric' | 'imperial';

export interface IWeather {
    description: string;
    icon: number;
    sunrise: number;
    sunset: number;
    temperature: number;
}
