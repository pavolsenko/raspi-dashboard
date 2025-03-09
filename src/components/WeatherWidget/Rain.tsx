import * as React from 'react';

import { mdiUmbrellaOutline } from '@mdi/js';

import { WidgetSubtitle } from '../Widget/WidgetSubtitle';

export interface IRainProps {
    percentage?: number;
}

export const Rain: React.FC<IRainProps> = (props: IRainProps) => {
    return (
        <WidgetSubtitle
            icon={mdiUmbrellaOutline}
            units={'%'}
            value={((props.percentage || 0) * 100).toFixed()}
        />
    );
};
