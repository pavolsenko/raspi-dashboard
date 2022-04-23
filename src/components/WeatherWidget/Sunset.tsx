import * as React from 'react';

import {mdiWeatherSunsetDown} from '@mdi/js';

import {WidgetSubtitle} from '../WidgetSubtitle';
import {normalizeTime} from '../../helpers/timeHelpers';

export interface ISunsetSunsetProps {
    sunset?: number;
}

export const Sunset: React.FC<ISunsetSunsetProps> = (props: ISunsetSunsetProps) => {
    return (
        <WidgetSubtitle
            icon={mdiWeatherSunsetDown}
            value={normalizeTime(props.sunset)}
        />
    );
};
