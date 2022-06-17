import * as React from 'react';
import axios from 'axios';
import {Map as ImmutableMap} from 'immutable';

import {AppConfig} from '../config/appConfig';
import {ILine, IStation} from '../interfaces';

const STATIONS = [
    'Alfred-Adler-Straße',
    'Hauptbahnhof',
];

export const useDepartures = () => {
    const [departures, setDepartures] = React.useState<ImmutableMap<string, IStation>>(ImmutableMap([]));
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [isError, setIsError] = React.useState<boolean>(false);
    const [currentStationIndex, setCurrentStationIndex] = React.useState<number>(0);
    const [isInitialLoad, setIsInitialLoad] = React.useState<boolean>(true);

    React.useEffect(() => {
        const loadDeparture = async (): Promise<Record<string, any> | undefined> => {
            setIsError(false);
            setIsLoading(true);

            let result: Record<string, any>;
            try {
                result = await axios.get(
                    AppConfig.wienerLinienApiEndpoint,
                    {params: {station: STATIONS[currentStationIndex]}},
                );

            } catch (error) {
                setIsError(true);
                setIsLoading(false);
                setCurrentStationIndex(0);
                return;
            }

            const data = result?.data?.data?.monitors;

            if (!data) {
                setIsLoading(false);
                return;
            }

            const departure = {
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
            };

            setDepartures(
                departures.set(departure.name, departure),
            );

            if (currentStationIndex === STATIONS.length - 1) {
                setCurrentStationIndex(0);
            } else {
                setCurrentStationIndex(currentStationIndex + 1);
            }

            setIsLoading(false);
        };

        if (isInitialLoad) {
            loadDeparture();
            setIsInitialLoad(false);
        }

        const intervalId = setInterval(
            () => {loadDeparture()},
            AppConfig.wienerLinienUpdateInterval,
        );

        return () => clearInterval(intervalId);
    }, [currentStationIndex, departures, isInitialLoad]);

    return {
        departures,
        isError,
        isLoading,
    };
};
