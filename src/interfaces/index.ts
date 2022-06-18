export interface IWidgetProps {
    headerBackgroundColor: string;
}

export interface ILine {
    name: string;
    direction: string;
    countdowns: number[];
}

export interface IStation {
    name: string;
    lines: ILine[];
}

export interface IStationRequest {
    name: string;
    lines?: string[];
}
