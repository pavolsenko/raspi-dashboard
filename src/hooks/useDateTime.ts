import { useEffect, useState } from 'react';

const DEFAULT_INTERVAL = 2500;

export const useDateTime = (ms?: number): Date => {
    const [dateTime, setDateTime] = useState<Date>(new Date());

    useEffect(() => {
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
