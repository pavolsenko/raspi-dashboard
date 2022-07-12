import * as React from 'react';
import {Map as ImmutableMap} from 'immutable';
import axios, {AxiosResponse} from 'axios';

import {AppConfig} from '../config/appConfig';
import {IStation, IStationRequest} from '../interfaces';
import {processStations} from '../helpers/stationsHelper';
import {DEPARTURES_KEY, STATIONS} from '../config/departuresConfig';

export const useDepartures = () => {
    const [departures, setDepartures] = React.useState<ImmutableMap<string, IStation>>(
        ImmutableMap(JSON.parse(window.localStorage.getItem(DEPARTURES_KEY) || '{}')),
    );
    const [isError, setIsError] = React.useState<boolean>(false);
    const [currentStationIndex, setCurrentStationIndex] = React.useState<number>(0);
    const [isInitialLoad, setIsInitialLoad] = React.useState<boolean>(true);

    React.useEffect(() => {
        const loadDeparture = () => {
            setIsError(false);
            const station: IStationRequest = STATIONS[currentStationIndex];

            axios.get(
                AppConfig.wienerLinienApiEndpoint,
                {params: {
                    station: station.name},
                },
            )
                .then((response: AxiosResponse) => {
                    const data = response?.data?.data?.monitors;

                    let departure;
                    if (data) {
                        departure = processStations(station, data);
                    }

                    if (!departure) {
                        return;
                    }

                    const newDepartures = departures.set(departure.name, departure);
                    window.localStorage.setItem(DEPARTURES_KEY, JSON.stringify(newDepartures.toJS()) || '');

                    setDepartures(
                        newDepartures,
                    );
                })
                .catch(() => {
                    setIsError(true);
                })
                .finally(() => {
                    if (currentStationIndex === STATIONS.length - 1) {
                        setCurrentStationIndex(0);
                    } else {
                        setCurrentStationIndex(currentStationIndex + 1);
                    }
                });
        };

        if (isInitialLoad) {
            loadDeparture();
            setIsInitialLoad(false);
            return;
        }

        const intervalId = setInterval(
            loadDeparture,
            AppConfig.wienerLinienApiUpdateInterval,
        );

        return () => clearInterval(intervalId);
    }, [currentStationIndex, departures, isInitialLoad]);

    return {
        departures,
        isError,
    };
};
