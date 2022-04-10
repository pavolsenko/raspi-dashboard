import * as React from 'react'

import {Box} from '@mui/material';

import {useTime} from './hooks/useTime';

export const Time: React.FC = () => {
    const dateTime = useTime();

    const getHours = (): string => {
        if (dateTime.getHours() < 10) {
            return '0' + dateTime.getHours().toString();
        }

        return dateTime.getHours().toString();
    };

    const getMinutes = (): string => {
        if (dateTime.getMinutes() < 10) {
            return '0' + dateTime.getMinutes().toString();
        }

        return dateTime.getMinutes().toString();
    };

    return (
        <Box>{getHours()}:{getMinutes()}</Box>
    );
};
