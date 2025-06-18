import { mdiArrowDown, mdiArrowUp } from '@mdi/js';
import Icon from '@mdi/react';

import { DEFAULT_FONT_SECONDARY_SIZE } from '@app/helpers/themeHelper';

export interface CryptoTrendIconProps {
    trendValue: number;
}

export function CryptoTrendIcon(props: CryptoTrendIconProps) {
    if (props.trendValue > 0) {
        return <Icon path={mdiArrowUp} size={DEFAULT_FONT_SECONDARY_SIZE} />;
    }

    return <Icon path={mdiArrowDown} size={DEFAULT_FONT_SECONDARY_SIZE} />;
}
