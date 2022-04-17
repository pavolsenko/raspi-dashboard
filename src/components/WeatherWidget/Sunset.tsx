import * as React from 'react';

import {mdiWeatherSunsetDown} from '@mdi/js';

import {WidgetSubtitle} from '../WidgetSubtitle';

export interface ISunsetSunsetProps {
    sunset?: number;
}

export const Sunset: React.FC<ISunsetSunsetProps> = (props: ISunsetSunsetProps) => {
    const getTime = (): string => {
        let date: Date = new Date((props?.sunset || 0) * 1000);
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
            icon={mdiWeatherSunsetDown}
            value={getTime()}
        />
    );
};
