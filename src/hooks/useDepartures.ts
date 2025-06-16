import { useEffect, useState } from 'react';
import { Map as ImmutableMap } from 'immutable';
import axios, { AxiosResponse } from 'axios';

import { appConfig } from '@app/config/appConfig';
import { DEPARTURES_KEY, STATION } from '@app/config/departuresConfig';
import { StationDeparture } from '@app/interfaces/departures';
import { processStations } from '@app/helpers/stationsHelper';

type StationDeparturesMap = ImmutableMap<string, StationDeparture>;

interface UseDepartures {
    departures: StationDeparturesMap;
    isError: boolean;
    resetCache: () => void;
    removeStation: (stationIndex: string) => void;
}

export function useDepartures(): UseDepartures {
    const [departures, setDepartures] = useState<StationDeparturesMap>(
        ImmutableMap<string, StationDeparture>(
            JSON.parse(window.localStorage.getItem(DEPARTURES_KEY) || '{}'),
        ),
    );
    const [isError, setIsError] = useState<boolean>(false);
    const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);

    function setLocalStorageDepartures(departuresData: StationDeparturesMap) {
        window.localStorage.setItem(
            DEPARTURES_KEY,
            JSON.stringify(departuresData.toJS()) || '',
        );
    }

    useEffect(() => {
        const loadDeparture = () => {
            setIsError(false);
            axios
                .get(appConfig.wienerLinienApiEndpoint, {
                    params: {
                        station: STATION.name,
                        line: STATION.lines[0].name,
                    },
                })
                .then((response: AxiosResponse) => {
                    const data = response?.data?.data?.monitors as Record<
                        string,
                        string
                    >[];

                    let departure;
                    if (data && data.length > 0) {
                        departure = processStations(STATION, data);
                    }

                    if (!departure) {
                        return;
                    }

                    const newDepartures = departures
                        .clear()
                        .set(departure.name, departure);
                    setLocalStorageDepartures(newDepartures);

                    setDepartures(newDepartures);
                })
                .catch((reason) => {
                    console.error(reason);
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
            appConfig.wienerLinienApiUpdateInterval,
        );

        return () => clearInterval(intervalId);
    }, [departures, isInitialLoad]);

    function removeStation(stationIndex: string) {
        const newDepartures = departures.remove(stationIndex);
        setDepartures(newDepartures);
        setLocalStorageDepartures(newDepartures);
    }

    function resetCache() {
        setDepartures(departures.clear());
        window.localStorage.setItem(DEPARTURES_KEY, '{}');
    }

    return {
        departures,
        isError,
        resetCache,
        removeStation,
    };
}
