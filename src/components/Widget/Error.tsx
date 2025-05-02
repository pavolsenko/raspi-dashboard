import { Box } from '@mui/material';
import { mdiCloudCancelOutline } from '@mdi/js';
import Icon from '@mdi/react';

import { DEFAULT_FONT_SIZE } from '../../helpers/themeHelper';
import { Widget } from './Widget';

import { errorStyles } from './styles';

export function Error() {
    return (
        <Widget>
            <Box sx={errorStyles}>
                <Icon path={mdiCloudCancelOutline} size={DEFAULT_FONT_SIZE} />
            </Box>
        </Widget>
    );
}
