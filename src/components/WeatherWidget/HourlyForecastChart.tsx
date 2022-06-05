import * as React from 'react';
import Chart from 'react-apexcharts';
import {ApexOptions} from 'apexcharts';

interface IHourlyForecastProps {
    hours?: Record<string, any>[];
}

export const HourlyForecastChart: React.FC<IHourlyForecastProps> = (props: IHourlyForecastProps) => {
    if (!props.hours) {
        return null;
    }

    const series: ApexAxisChartSeries = [{
        color: '#084c61',
        data: props.hours.map((item: Record<string, any>) => Math.floor(item.temp)),
        name: 'temperature',
        type: 'line',
    }];

    const chartOptions: ApexOptions = {
        chart: {
            toolbar: {show: false},
        },
        dataLabels: {
            enabledOnSeries: [0],
        },
        legend: {show: false},
        stroke: {
            width: [4],
        },
        xaxis: {
            axisBorder: {show: false},
            axisTicks: {show: false},
            labels: {show: false},
        },
        yaxis: {
            axisBorder: {show: false},
            axisTicks: {show: false},
            labels: {show: false},
            min: 10,
            max: 40,
            show: false,
        },
    };

    return (
        <Chart
            height={200}
            options={chartOptions}
            series={series}
            width={400}
        />
    );
};
