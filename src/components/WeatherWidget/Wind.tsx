import * as React from 'react';

import {mdiArrowUp} from '@mdi/js';

import {WidgetSubtitle} from '../Widget/WidgetSubtitle';

export interface IWindProps {
    direction?: number;
    speed?: number;
}

export const Wind: React.FC<IWindProps> = (props: IWindProps) => {
    return (
        <WidgetSubtitle
            icon={mdiArrowUp}
            iconRotation={props.direction}
            units={'m/s'}
            value={(props.speed?.toFixed(1) || 0).toString()}
        />
    );
};
