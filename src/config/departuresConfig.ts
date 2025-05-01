import { IStationRequest } from '../interfaces';

export const STATIONS: IStationRequest[] = [
    {
        name: 'Alfred Adler Straße',
        lines: [
            { name: 'D', directions: ['H'] },
            { name: '69A', directions: ['H'] },
        ],
        order: 0,
    },
];

export const DEPARTURES_KEY = 'departures';
