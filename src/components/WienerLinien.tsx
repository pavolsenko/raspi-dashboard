import * as React from 'react';
import axios from 'axios';

export const WienerLinien: React.FC = () => {
    const [departures, setDepartures] = React.useState<Record<string, any>[]>([]);

    React.useEffect(() => {
        (async () => {
            const result = await axios.get('https://apps.static-access.net/ViennaTransport/monitor/', {
                params: {
                    line: 'u1',
                    station: 'Südtiroler Platz',
                    towards: 'Oberlaa',
                },
            });
            setDepartures(result.data.data.monitors[0].lines[0].departures.departure);
        })();
    }, []);

    return (
        <>{departures[0]?.countdown}</>
    );
};
