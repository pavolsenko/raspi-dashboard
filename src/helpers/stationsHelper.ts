import {
    LineDeparture,
    StationDeparture,
    StationRequest,
} from '@app/interfaces/departures';

export function processStations(
    station: StationRequest,
    data: Record<string, any>[],
): StationDeparture {
    const lines: LineDeparture[] = [data[2], data[1]].map(
        (monitor: Record<string, any>): LineDeparture => {
            return {
                name: monitor.lines[0].name,
                direction: monitor.lines[0].towards,
                departures: monitor.lines[0].departures.departure
                    .map((item: Record<string, any>): string | undefined => {
                        return (
                            item.departureTime.timeReal ||
                            item.departureTime.timePlanned ||
                            undefined
                        );
                    })
                    .filter((item: string | undefined) => item),
            };
        },
    );

    return {
        name: data[0].locationStop.properties.title,
        lines,
        order: station.order,
    };
}

export function getFirstTwoCountdowns(departures: string[]): number[] {
    let newCountdowns: number[] = [];

    departures.forEach((value: string) => {
        if (!value) {
            return;
        }

        if (newCountdowns.length === 2) {
            return;
        }

        const timeDifference = getTimeDifference(value);

        if (timeDifference < 0) {
            return;
        }

        if (newCountdowns.length === 0) {
            newCountdowns[0] = timeDifference;
        } else {
            newCountdowns[1] = timeDifference;
        }
    });

    if (!newCountdowns) {
        newCountdowns = [0, 0];
    }

    return newCountdowns;
}

export function getTimeDifference(dateTime: string): number {
    const nowDate = Date.now();
    const valueDate = new Date(dateTime).getTime();

    return Math.floor((valueDate - nowDate) / 1000 / 60);
}

export function getBackgroundColor(lineName: string): string {
    if (lineName === 'U1') {
        return '#e20210';
    }

    if (lineName === 'U2') {
        return '#935e98';
    }

    if (lineName === 'U3') {
        return '#ef7e00';
    }

    if (lineName === 'U4') {
        return '#079243';
    }

    if (lineName === 'U5') {
        return '#008F96';
    }

    if (lineName === 'U6') {
        return '#a4642c';
    }

    if (lineName.includes('A') || lineName.includes('B')) {
        return 'linear-gradient(315deg, hsla(227, 100%, 25%, 1) 0%, hsla(215, 100%, 28%, 1) 100%)';
    }

    return 'linear-gradient(315deg, hsla(0, 100%, 40%, 1) 0%, hsla(0, 100%, 27%, 1) 100%)';
}
