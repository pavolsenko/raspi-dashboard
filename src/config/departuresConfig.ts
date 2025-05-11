import { IStationRequest } from '../interfaces/departures';

export const STATION: IStationRequest = {
    name: 'Alfred-Adler-Straße',
    lines: [
        { name: 'D', directions: ['H'] },
        { name: '69A', directions: ['R'] },
    ],
    order: 0,
};

export const DEPARTURES_KEY = 'departures';
