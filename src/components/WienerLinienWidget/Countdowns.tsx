import { ReactNode } from 'react';

import { Box } from '@mui/material';
import { mdiCircle, mdiClockRemoveOutline } from '@mdi/js';
import Icon from '@mdi/react';

import {
    countdownBlinkingStyles,
    countdownErrorStyles,
    countdownStyles,
    countdownsWrapperStyles,
} from './styles';

interface ICountdownsProps {
    values: number[];
}

export function Countdowns(props: ICountdownsProps) {
    function renderCountdown(value: number): ReactNode {
        if (value === 0) {
            return (
                <Box sx={countdownBlinkingStyles}>
                    <Icon path={mdiCircle} size="12px" />
                </Box>
            );
        }

        return value;
    }

    function renderCountdowns(): ReactNode {
        if (!props.values[0] && !props.values[1]) {
            return (
                <Box sx={countdownErrorStyles}>
                    <Icon path={mdiClockRemoveOutline} size="22px" />
                </Box>
            );
        }

        return (
            <>
                <Box sx={countdownStyles}>
                    {renderCountdown(props.values[0])}
                </Box>
                <Box sx={countdownStyles}>
                    {renderCountdown(props.values[1])}
                </Box>
            </>
        );
    }

    return <Box sx={countdownsWrapperStyles}>{renderCountdowns()}</Box>;
}
