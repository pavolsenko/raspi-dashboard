import {IStationRequest} from '../interfaces';

export const STATIONS: IStationRequest[] = [
    {
        name: 'Südtiroler Platz',
        order: 1,
    }, {
        name: 'Hauptbahnhof S U',
        lines: [
            {name: '18'},
            {name: '13A'},
        ],
        order: 2,
    }, {
        name: 'Alfred-Adler-Straße',
        lines: [
            {name: '69A', directions: ['H']},
            {name: 'D', directions: ['H']},
        ],
        order: 3,
    }, {
        name: 'Scheugasse',
        order: 4,
    },
];

export const MERGE_STATIONS = [{
    'Hauptbahnhof': [
        'Südtiroler Platz',
        'Hauptbahnhof S U',
    ],
}];

export const DEPARTURES_KEY = 'departures';
