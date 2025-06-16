import { ReactNode, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { mdiCircle, mdiClockRemoveOutline } from '@mdi/js';
import Icon from '@mdi/react';

import { getFirstTwoCountdowns } from '@app/helpers/stationsHelper';

import {
    countdownBlinkingStyles,
    countdownErrorStyles,
    countdownNumberStyles,
    countdownsWrapperStyles,
} from './lineStyles';

interface CountdownsProps {
    departures: string[];
}

export function Countdowns(props: Readonly<CountdownsProps>) {
    const [tick, setTick] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(
            () => setTick((tick: number) => Number(!tick)),
            1000 * 30,
        );

        return () => clearInterval(interval);
    }, []);

    function renderCountdown(value: number): ReactNode {
        if (value === 0) {
            return (
                <Box sx={countdownBlinkingStyles} data-tick={tick}>
                    <Icon path={mdiCircle} size="12px" />
                </Box>
            );
        }

        return value;
    }

    function renderCountdowns(): ReactNode {
        const values = getFirstTwoCountdowns(props.departures);

        if (!values[0] && !values[1]) {
            return (
                <Box sx={countdownErrorStyles}>
                    <Icon path={mdiClockRemoveOutline} size="22px" />
                </Box>
            );
        }

        return (
            <>
                <Typography
                    variant={'body2'}
                    sx={countdownNumberStyles}
                    component={Box}
                >
                    {renderCountdown(values[0])}
                </Typography>
                <Typography
                    variant={'body2'}
                    sx={countdownNumberStyles}
                    component={Box}
                >
                    {renderCountdown(values[1])}
                </Typography>
            </>
        );
    }

    return <Box sx={countdownsWrapperStyles}>{renderCountdowns()}</Box>;
}
