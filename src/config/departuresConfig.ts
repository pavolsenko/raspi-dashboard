import { StationRequest } from '@app/interfaces/departures';

export const STATION: StationRequest = {
    name: 'Alfred-Adler-Straße',
    lines: [
        { name: 'D', directions: ['H'] },
        { name: '69A', directions: ['R'] },
    ],
    order: 0,
};

export const DEPARTURES_KEY = 'departures';
