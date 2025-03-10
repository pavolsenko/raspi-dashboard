import { ILine, IStation, IStationRequest } from '../interfaces';

export const processStations = (
    station: IStationRequest,
    data: Record<string, any>[],
): IStation => {
    const lines = data
        .filter((monitor: Record<string, any>): boolean => {
            if (!station.lines) {
                return true;
            }

            // exclude lines heading to depots
            if (monitor.lines[0].towards.includes('Betriebsbhf')) {
                return false;
            }

            for (const line of station.lines) {
                if (line.name === monitor.lines[0].name && !line.directions) {
                    return true;
                }

                if (
                    line.name === monitor.lines[0].name &&
                    line.directions?.includes(monitor.lines[0].direction)
                ) {
                    return true;
                }
            }

            return false;
        })
        .map((monitor: Record<string, any>): ILine => {
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
        });

    return {
        name: data[0].locationStop.properties.title,
        lines,
        order: station.order,
    };
};

export const getFirstTwoCountdowns = (departures: string[]): number[] => {
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
};

export const getTimeDifference = (dateTime: string): number => {
    const nowDate = Date.now();
    const valueDate = new Date(dateTime).getTime();

    return Math.floor((valueDate - nowDate) / 1000 / 60);
};
