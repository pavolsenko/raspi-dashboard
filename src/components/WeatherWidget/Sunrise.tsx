import * as React from 'react';

import {mdiWeatherSunsetUp} from '@mdi/js';

import {WidgetSubtitle} from '../WidgetSubtitle';

export interface ISunriseSunsetProps {
    sunrise?: number;
}

export const Sunrise: React.FC<ISunriseSunsetProps> = (props: ISunriseSunsetProps) => {
    const getTime = (): string => {
        let date: Date = new Date((props?.sunrise || 0) * 1000);
        let result: string;

        if (date.getHours() < 10) {
            result = '0' + date.getHours().toString();
        } else {
            result = date.getHours().toString();
        }

        if (date.getMinutes() < 10) {
            result += ':0' + date.getMinutes().toString();
        } else {
            result += ':' + date.getMinutes().toString();
        }

        return result;
    };

    return (
        <WidgetSubtitle
            icon={mdiWeatherSunsetUp}
            value={getTime()}
        />
    );
};
