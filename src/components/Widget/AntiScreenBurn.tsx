import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import { getRandomHexColor } from '../../helpers/themeHelper';

import { antiBurnStyles } from './styles';

export function AntiScreenBurn() {
    const [screen, setScreen] = useState<number>(0);

    useEffect(() => {
        let timer = setInterval(() => setScreen(1), 5 * 60 * 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        if (screen === 0) {
            return;
        }

        if (screen > 6) {
            setScreen(0);
            return;
        }

        let timer = setInterval(
            () => setScreen((prevState: number) => prevState + 1),
            700,
        );

        return () => {
            clearInterval(timer);
        };
    }, [screen]);

    if (screen === 0) {
        return;
    }

    return (
        <Box
            sx={{
                ...antiBurnStyles,
                backgroundColor: getRandomHexColor(),
                top: screen * 150 - 150,
            }}
        />
    );
}
