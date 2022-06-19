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
                countdowns: [
                    monitor.lines[0].departures.departure[0].departureTime.countdown,
                    monitor.lines[0].departures.departure[1].departureTime.countdown,
                ],
            };
        });

    return {
        name: data[0].locationStop.properties.title,
        lines,
        order: station.order,
    };
};

export const decrementCountdowns = (station?: IStation): IStation | undefined => {
    if (!station) {
        return;
    }

    return {
        ...station,
        lines: station.lines.map((line: ILine) => {
            return {
                ...line,
                countdowns: line.countdowns.map((countdown: number) => {
                    return countdown === 0 ? countdown : countdown - 1;
                }),
            };
        }),
    };
};
