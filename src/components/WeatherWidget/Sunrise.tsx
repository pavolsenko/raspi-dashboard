import * as React from 'react';

import {mdiWeatherSunsetUp} from '@mdi/js';

import {WidgetSubtitle} from '../Widget/WidgetSubtitle';
import {normalizeTime} from '../../helpers/timeHelpers';

export interface ISunriseSunsetProps {
    sunrise?: number;
}

export const Sunrise: React.FC<ISunriseSunsetProps> = (props: ISunriseSunsetProps) => {
    return (
        <WidgetSubtitle
            icon={mdiWeatherSunsetUp}
            value={normalizeTime(props.sunrise)}
        />
    );
};
