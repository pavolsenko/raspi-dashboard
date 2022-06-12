import * as React from 'react';
import axios from 'axios';

import {AppConfig} from '../config/appConfig';
import {ILine, IStop} from '../interfaces';

const STATIONS = [
    'Alfred-Adler-Straße',
];

export const useDepartures = () => {
    const [departures, setDepartures] = React.useState<IStop[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [isError, setIsError] = React.useState<boolean>(false);

    const loadDeparture = async (station: string): Promise<Record<string, any> | undefined> => {
        let result: Record<string, any>;
        try {
            result = await axios.get(
                AppConfig.wienerLinienApiEndpoint,
            {params: {station}},
            );

        } catch (error) {
            setIsError(true);
            setIsLoading(false);
            return;
        }

        return result?.data?.data?.monitors;
    }

    const loadDepartures = async (): Promise<void> => {
        setIsError(false);
        setIsLoading(true);

        const departures: IStop[] = [];
        for (const station of STATIONS) {
            const data = await loadDeparture(station);

            if (!data) {
                continue;
            }

            departures.push({
                name: data[0].locationStop.properties.title,
                lines: data.map((monitor: Record<string, any>): ILine => {
                    return {
                        name: monitor.lines[0].name,
                        direction: monitor.lines[0].towards,
                        countdowns: [
                            monitor.lines[0].departures.departure[0].departureTime.countdown,
                            monitor.lines[0].departures.departure[1].departureTime.countdown,
                        ],
                    };
                }),
            });
        }

        setDepartures(departures);
        setIsLoading(false);
    };

    return {
        departures,
        isError,
        isLoading,
        loadDepartures,
    };
};
