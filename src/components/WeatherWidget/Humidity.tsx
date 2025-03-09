import * as React from 'react';

import { mdiWaterOpacity } from '@mdi/js';

import { WidgetSubtitle } from '../Widget/WidgetSubtitle';

interface IHumidityProps {
    humidity?: number;
}

export const Humidity: React.FC<IHumidityProps> = (props: IHumidityProps) => {
    return (
        <WidgetSubtitle
            icon={mdiWaterOpacity}
            units={'%'}
            value={(props?.humidity || 0).toString()}
        />
    );
};
