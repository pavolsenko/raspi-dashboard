import { Box } from '@mui/material';
import { mdiCloudCancelOutline } from '@mdi/js';
import Icon from '@mdi/react';

import { DEFAULT_FONT_SIZE } from '@app/helpers/themeHelper';
import { Widget } from '@app/components/Widget/Widget';

import { errorStyles } from './antiBurnStyles';

export function ErrorCloud() {
    return (
        <Widget>
            <Box sx={errorStyles}>
                <Icon path={mdiCloudCancelOutline} size={DEFAULT_FONT_SIZE} />
            </Box>
        </Widget>
    );
}
