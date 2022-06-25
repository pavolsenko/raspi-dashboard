import * as React from 'react';

import {Box, styled} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CircleIcon from '@mui/icons-material/Circle';

import {AppConfig} from '../../config/appConfig';
import {processCountdowns} from '../../helpers/stationsHelper';

interface ICountdownsProps {
    values: string[];
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

    const renderCountdown = (value: number): React.ReactNode => {
        if (value === 0) {
            return (
                <BlinkingBox sx={{
                    animation: '1s blink infinite',
                    fontSize: '12px',
                    marginTop: '4px',
                }}>
                    <CircleIcon fontSize={'inherit'}/>
                </BlinkingBox>
            );
        }

        return value;
    };

    if (countdowns[0] === 0 && countdowns[1] === 0) {
        return (
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '16px',
                marginRight: '24px',
            }}>
                <CloseIcon fontSize={'inherit'}/>
            </Box>
        );
    }

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
