import {ILine, IStation} from '../interfaces';

export const processStations = (data: Record<string, any>): IStation => {
    return {
        name: data[0].locationStop.properties.title,
        lines: data.map((monitor: Record<string, any>): ILine => {
            return {
                name: monitor.lines[0].name,
                direction: monitor.lines[0].towards,
                countdowns: [
                    monitor.lines[0].departures.departure[0].departureTime.countdown,
                    monitor.lines[0].departures.departure[1].departureTime.countdown,
                ],
            };
        }),
    };
};
