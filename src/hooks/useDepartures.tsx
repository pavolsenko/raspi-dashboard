import * as React from 'react';
import {Map as ImmutableMap} from 'immutable';

import {AppConfig} from '../config/appConfig';
import {IStation, IStationRequest} from '../interfaces';
import {processStations} from '../helpers/stationsHelper';
import axios, {AxiosResponse} from 'axios';

const STATIONS: IStationRequest[] = [
    {name: 'Südtiroler Platz'},
    {name: 'Hauptbahnhof'},
    {name: 'Alfred-Adler-Straße'},
    {name: 'Scheugasse'},
];

export const useDepartures = () => {
    const [departures, setDepartures] = React.useState<ImmutableMap<string, IStation>>(ImmutableMap([]));
    const [isError, setIsError] = React.useState<boolean>(false);
    const [currentStationIndex, setCurrentStationIndex] = React.useState<number>(0);
    const [isInitialLoad, setIsInitialLoad] = React.useState<boolean>(true);

    React.useEffect(() => {
        const loadDeparture = () => {
            setIsError(false);

            axios.get(
                AppConfig.wienerLinienApiEndpoint,
                {params: {
                    station: STATIONS[currentStationIndex].name},
                },
            )
                .then((response: AxiosResponse) => {
                    const data = response?.data?.data?.monitors;

                    if (!data) {
                        return;
                    }

                    const departure = processStations(data);

                    setDepartures(
                        departures.set(departure.name, departure),
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
            AppConfig.wienerLinienUpdateInterval,
        );

        return () => clearInterval(intervalId);
    }, [currentStationIndex, departures, isInitialLoad]);

    return {
        departures,
        isError,
    };
};
