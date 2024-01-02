import {Box} from '@mui/material';
import {mdiCloudCancelOutline} from '@mdi/js';
import Icon from '@mdi/react';

import {errorStyles} from './styles';

export function Error() {
    return (
        <Box sx={errorStyles}>
            <Icon path={mdiCloudCancelOutline} size="42px"/>
        </Box>
    );
}