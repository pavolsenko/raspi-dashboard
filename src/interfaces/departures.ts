export interface LineDeparture {
    name: string;
    direction: string;
    departures: string[];
}

export interface StationDeparture {
    name: string;
    lines: LineDeparture[];
    order?: number;
}

export interface StationRequest {
    name: string;
    lines: {
        name: string;
        directions?: string[];
        order?: number;
    }[];
    order: number;
}
