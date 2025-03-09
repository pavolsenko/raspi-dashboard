import * as React from 'react';

const DEFAULT_INTERVAL = 25000;

export const useDateTime = (ms?: number): Date => {
    const [dateTime, setDateTime] = React.useState<Date>(new Date());

    React.useEffect(() => {
        const interval = setInterval(
            () => setDateTime(new Date()),
            ms || DEFAULT_INTERVAL,
        );
        return () => {
            clearInterval(interval);
        };
    }, [ms]);

    return dateTime;
};
