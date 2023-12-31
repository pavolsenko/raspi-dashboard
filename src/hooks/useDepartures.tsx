import {useEffect, useState} from "react";
import {Map as ImmutableMap} from 'immutable';
import axios, {AxiosResponse} from 'axios';

import {AppConfig} from '../config/appConfig';
import {DEPARTURES_KEY, STATIONS} from '../config/departuresConfig';
import {ILine, IStation, IStationRequest} from '../interfaces';
import {processStations} from '../helpers/stationsHelper';

export const useDepartures = () => {
    const [departures, setDepartures] = useState<ImmutableMap<string, IStation>>(
        ImmutableMap<string, IStation>(JSON.parse(window.localStorage.getItem(DEPARTURES_KEY) || '{}')),
    );
    const [isError, setIsError] = useState<boolean>(false);
    const [currentStationIndex, setCurrentStationIndex] = useState<number>(0);
    const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);

    const setLocalStorageDepartures = (departuresData: ImmutableMap<string, IStation>) => {
        window.localStorage.setItem(DEPARTURES_KEY, JSON.stringify(departuresData.toJS()) || '');
    };

    useEffect(() => {
        const intervalId = setInterval(
            updateDeparturesCountdowns,
            AppConfig.wienerLinienTimetableUpdateInterval,
        );

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const loadDeparture = () => {
            setIsError(false);
            const station: IStationRequest = STATIONS[currentStationIndex];

            axios.get(
                AppConfig.wienerLinienApiEndpoint,{
                    params: {
                        station: station.name,
                    },
                },
            )
                .then((response: AxiosResponse) => {
                    const data = response?.data?.data?.monitors as unknown;

                    let departure;
                    if (data) {
                        departure = processStations(station, data);
                    }

                    if (!departure) {
                        return;
                    }

                    const newDepartures = departures.set(departure.name, departure);
                    setLocalStorageDepartures(newDepartures);

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

    const updateDeparturesCountdowns = () => {
        setDepartures((departures: ImmutableMap<string, IStation>) => departures.map((station: IStation): IStation => ({
            ...station,
            lines: station.lines.map((line: ILine): ILine => ({
                ...line,

            })),
        })));
    }

    const removeStation = (stationIndex: string) => {
        const newDepartures = departures.remove(stationIndex);
        setDepartures(newDepartures);
        setLocalStorageDepartures(newDepartures);
    };

    const removeLine = (stationIndex: string, lineIndex: number) => {
        const newDepartures = departures.removeIn([stationIndex, 'lines', lineIndex]);
        setDepartures(newDepartures);
        setLocalStorageDepartures(newDepartures);
    }

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
