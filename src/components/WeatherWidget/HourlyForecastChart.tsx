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

    const chartOptions: ApexOptions = {
        chart: {
            id: 'hourly-forecast',
            toolbar: {show: false},
        },
        dataLabels: {enabled: true},
        legend: {show: false},
        yaxis: {show: false, axisTicks: {show: false}, },
        xaxis: {
            axisTicks: {show: false},
            crosshairs: {show: false},
            labels: {show: false},
        },
    };

    const seriesTemperature: ApexAxisChartSeries = [{
        name: 'temperature',
        data: props.hours.slice(0, 11).map((item: Record<string, any>) => Math.floor(item.temp)),
        color: '#777777',
    }];

    const seriesRain: ApexAxisChartSeries = [{
        name: 'rain',
        data: props.hours.slice(0, 11).map((item: Record<string, any>) => Math.ceil(item.pop * 100)),
        color: '#333333',
        type: 'bar',
    }];

    return (
        <>
            <Chart
                options={chartOptions}
                series={seriesTemperature}
                height={100}
                width={400}
                type={'line'}
            />
            <Chart
                options={chartOptions}
                series={seriesRain}
                height={100}
                type={'bar'}
            />
        </>
    );
};
