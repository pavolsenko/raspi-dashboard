import {ILine, IStation, IStationRequest} from '../interfaces';

export const processStations = (station: IStationRequest, data: Record<string, any>): IStation => {
    const lines = data
        .filter((monitor: Record<string, any>): boolean => {
            if (!station.lines) {
                return true;
            }

            for (const line of station.lines) {
                if (line.name === monitor.lines[0].name && !line.directions) {
                    return true;
                }

                if (line.name === monitor.lines[0].name && line.directions?.includes(monitor.lines[0].direction)) {
                    return true;
                }
            }

            return false;
        })
        .map((monitor: Record<string, any>): ILine => {
            return {
                name: monitor.lines[0].name,
                direction: monitor.lines[0].towards,
                departures: monitor
                    .lines[0]
                    .departures
                    .departure
                    .map((item: Record<string, any>): string => {
                        return item.departureTime.timeReal || item.departure.timePlanned;
                    }),
            };
        });

    return {
        name: data[0].locationStop.properties.title,
        lines,
        order: station.order,
    };
};

export const predictNextDeparture = (firstDeparture: string, secondDeparture: string): number => {
    const nowDate = Date.now();
    const firstDepartureMinutes = Math.floor((new Date(firstDeparture).getTime() - nowDate) / 1000 / 60);
    const secondDepartureMinutes = Math.floor((new Date(secondDeparture).getTime() - nowDate) / 1000 / 60);

    return secondDepartureMinutes + (secondDepartureMinutes - firstDepartureMinutes);
};

export const processCountdowns = (values: string[]): number[] => {
    let newCountdowns: number[] = [];

    values.forEach((value: string) => {
        if (!value) {
            return;
        }

        if (newCountdowns.length === 2) {
            return;
        }

        const nowDate = Date.now();
        const valueDate = (new Date(value)).getTime();

        const timeDifference = Math.floor((valueDate - nowDate) / 1000 / 60);

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

    if (newCountdowns.length === 1) {
        newCountdowns[1] = predictNextDeparture(values[0], values[1]);
    }

    return newCountdowns;
};
