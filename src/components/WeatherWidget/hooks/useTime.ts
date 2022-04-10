import * as React from 'react';

export const useTime = (): Date => {
    const [dateTime, setDateTime] = React.useState<Date>(new Date());

    React.useEffect(() => {
        const interval = setInterval(() => setDateTime(new Date()), 1000 * 60);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return dateTime;
};
