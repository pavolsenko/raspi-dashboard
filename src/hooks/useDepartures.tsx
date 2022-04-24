import * as React from 'react';
import axios from 'axios';

import {AppConfig} from '../config/appConfig';

export const useDepartures = () => {
    const [departures, setDepartures] = React.useState<Record<string, any>[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [isError, setIsError] = React.useState<boolean>(false);

    const loadDepartures = async (): Promise<void> => {
        setIsError(false);
        setIsLoading(true);

        let result: any;
        try {
            result = await axios.get(AppConfig.wienerLinienApiEndpoint, {
                params: {
                    line: 'u1',
                    station: 'Südtiroler Platz',
                    towards: 'Oberlaa',
                },
            });

            setDepartures(result.data.data.monitors[0].lines[0].departures.departure);
        } catch (error) {
            setIsError(true);
            setIsLoading(false);
            return;
        }

        setIsLoading(false);
    };

    return {
        departures,
        isError,
        isLoading,
        loadDepartures,
    };
};
