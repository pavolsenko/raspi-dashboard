import * as React from 'react';

export const useTime = () => {
    const [time, setTime] = React.useState(Date.now());

    React.useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return time;
};
