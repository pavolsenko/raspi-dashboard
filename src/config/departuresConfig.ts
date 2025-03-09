import { IStationRequest } from '../interfaces';

export const STATIONS: IStationRequest[] = [
    {
        name: 'Alfred-Adler-Straße',
        lines: [
            { name: 'D', directions: ['H'] },
            { name: '69A', directions: ['H'] },
        ],
        order: 0,
    },
    {
        name: 'Keplerplatz',
        lines: [{ name: 'U1', directions: ['H'] }],
        order: 1,
    },
    {
        name: 'Hauptbahnhof',
        lines: [{ name: '18' }, { name: '13A' }],
        order: 2,
    },
    {
        name: 'Scheugasse',
        order: 4,
    },
];

export const DEPARTURES_KEY = 'departures';
