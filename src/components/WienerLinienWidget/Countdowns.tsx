import * as React from 'react';

import {Box, styled} from '@mui/material';
import {mdiCircle} from '@mdi/js';
import Icon from '@mdi/react';

import {AppConfig} from '../../config/appConfig';
import {processCountdowns} from '../../helpers/stationsHelper';

interface ICountdownsProps {
    stationIndex: string;
    lineIndex: number;
    values: string[];
    onLineClick?: (stationIndex: string, lineIndex: number) => void;
}

const BlinkingBox = styled(Box)({
    '@keyframes blink': {
        '50%': {opacity: 0},
    },
});

export const Countdowns: React.FC<ICountdownsProps> = (props: ICountdownsProps) => {
    const [countdowns, setCountdowns] = React.useState<number[]>([0, 0]);

    const getCountdowns = React.useCallback(() => {
        setCountdowns(processCountdowns(props.values));
    }, [props.values]);

    React.useEffect(() => {
        getCountdowns();
    }, [getCountdowns]);

    React.useEffect(() => {
        const intervalId = setInterval(
            getCountdowns,
            AppConfig.wienerLinienTimetableUpdateInterval,
        );

        return () => clearInterval(intervalId);
    }, [getCountdowns, props.values]);

    React.useEffect(() => {
        if (countdowns[0] === 0 && countdowns[1] === 0) {
            props.onLineClick?.(props.stationIndex, props.lineIndex);
        }
    }, [props, countdowns]);

    const renderCountdown = (value: number): React.ReactNode => {
        if (value === 0) {
            return (
                <BlinkingBox sx={{
                    animation: '1s blink infinite',
                    fontSize: '12px',
                    marginTop: '4px',
                }}>
                    <Icon path={mdiCircle} size={'12px'}/>
                </BlinkingBox>
            );
        }

        return value;
    };

    return (
        <Box sx={{
            display: 'flex',
            fontSize: '22px',
        }}>
            <Box sx={{
                width: '38px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {renderCountdown(countdowns[0])}
            </Box>

            <Box sx={{
                width: '38px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {renderCountdown(countdowns[1])}
            </Box>
        </Box>
    );
};
