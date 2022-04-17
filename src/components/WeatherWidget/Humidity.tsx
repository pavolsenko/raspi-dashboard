import * as React from 'react';

import {mdiWaterOpacity} from '@mdi/js';

import {WidgetSubtitle} from '../WidgetSubtitle';

interface IHumidityProps {
    humidity?: number;
}

export const Humidity: React.FC<IHumidityProps> = (props: IHumidityProps) => {
    return (
        <WidgetSubtitle
            icon={mdiWaterOpacity}
            value={(props?.humidity || 0).toString() + '%'}
        />
    );
};
