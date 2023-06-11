export interface IWidgetProps {
    headerBackgroundColor: string;
}

export interface ILine {
    name: string;
    direction: string;
    departures: string[];
}

export interface IStation {
    name: string;
    lines: ILine[];
    order: number;
}

export interface IStationRequest {
    name: string;
    lines?: {
        name: string;
        directions?: string[];
    }[];
    order: number;
}

export interface ICurrency {
    name?: string;
    symbol?: string;
    iconUrl?: string;
    count?: number;
    priceInEur?: number;
    totalValueInEur?: number;
}
