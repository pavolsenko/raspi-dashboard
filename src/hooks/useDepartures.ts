import { useEffect, useState } from 'react';
import { Map as ImmutableMap } from 'immutable';
import axios, { AxiosResponse } from 'axios';

import { AppConfig } from '../config/appConfig';
import { DEPARTURES_KEY, STATION } from '../config/departuresConfig';
import { IStation } from '../interfaces';
import { processStations } from '../helpers/stationsHelper';

export const useDepartures = () => {
    const [departures, setDepartures] = useState<
        ImmutableMap<string, IStation>
    >(
        ImmutableMap<string, IStation>(
            JSON.parse(window.localStorage.getItem(DEPARTURES_KEY) || '{}'),
        ),
    );
    const [isError, setIsError] = useState<boolean>(false);
    const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);

    const setLocalStorageDepartures = (
        departuresData: ImmutableMap<string, IStation>,
    ) => {
        window.localStorage.setItem(
            DEPARTURES_KEY,
            JSON.stringify(departuresData.toJS()) || '',
        );
    };

    useEffect(() => {
        const loadDeparture = () => {
            setIsError(false);
            axios
                .get(AppConfig.wienerLinienApiEndpoint, {
                    params: {
                        station: STATION.name,
                        line: STATION.lines[0].name,
                    },
                })
                .then((response: AxiosResponse) => {
                    const data = response?.data?.data?.monitors as Record<
                        string,
                        any
                    >[];

                    let departure;
                    if (data && data.length > 0) {
                        departure = processStations(STATION, data);
                    }

                    if (!departure) {
                        return;
                    }

                    const newDepartures = departures.set(
                        departure.name,
                        departure,
                    );
                    setLocalStorageDepartures(newDepartures);

                    setDepartures(newDepartures);
                })
                .catch((reason) => {
                    console.log(reason);
                    setIsError(true);
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
    }, [departures, isInitialLoad]);

    const removeStation = (stationIndex: string) => {
        const newDepartures = departures.remove(stationIndex);
        setDepartures(newDepartures);
        setLocalStorageDepartures(newDepartures);
    };

    const removeLine = (stationIndex: string, lineIndex: number) => {
        const newDepartures = departures.removeIn([
            stationIndex,
            'lines',
            lineIndex,
        ]);
        setDepartures(newDepartures);
        setLocalStorageDepartures(newDepartures);
    };

    const resetCache = () => {
        window.localStorage.setItem(DEPARTURES_KEY, '');
    };

    return {
        departures,
        isError,
        resetCache,
        removeStation,
        removeLine,
    };
};
