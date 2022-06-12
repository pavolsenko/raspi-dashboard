export interface IWidgetProps {
    headerBackgroundColor: string;
}

export interface ILine {
    name: string;
    direction: string;
    countdowns: number[];
}

export interface IStop {
    name: string;
    lines: ILine[];
}

export interface IDepartures {
    stops: IStop[];
}
