import * as React from 'react';

import {Alert, Box, CircularProgress} from '@mui/material';

import {useCrypto} from './hooks/useCrypto';
import {AppConfig} from '../../config/appConfig';
import {IWidgetProps} from '../../interfaces';
import {Time} from '../Time';

export const CryptoWidget: React.FC<IWidgetProps> = (props: IWidgetProps) => {
    const [isInitialLoad, setIsInitialLoad] = React.useState<boolean>(true);

    const {
        isError,
        isLoading,
        cryptoStats,
        loadCryptoStats,
    } = useCrypto();

    React.useEffect(() => {
        if (isInitialLoad) {
            (async () => await loadCryptoStats())();
            setIsInitialLoad(false);
        }

        const interval = setInterval(
            async () => await loadCryptoStats(),
            AppConfig.defaultUpdateInterval,
        );

        return () => clearInterval(interval);
    }, [loadCryptoStats, isInitialLoad, setIsInitialLoad]);

    if (isLoading) {
        return (
            <CircularProgress/>
        );
    }

    if (isError) {
        return (
            <Alert severity={'error'}>Sorry, something went wrong</Alert>
        );
    }

    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Box sx={{
                width: '100%',
                backgroundColor: props.headerBackgroundColor,
                color: '#ffffff',
                height: '160px',
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    margin: '16px',
                }}>
                    <Box>
                        <Box sx={{fontSize: '26px', lineHeight: '22px'}}>CoinStats</Box>
                        <Box sx={{fontSize: '14px'}}>Crypto portfolio</Box>
                    </Box>
                    <Time/>
                </Box>

                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '60px',
                }}>
                    <Box>€{Math.floor(cryptoStats?.portfolio.p.EUR)}</Box>
                    <Box sx={{fontSize: '26px', paddingTop: '12px'}}>
                        {Math.floor((cryptoStats?.portfolio.p.EUR % 1) * 100)}
                    </Box>
                </Box>
            </Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: '#ffffff',
            }}>
                test
            </Box>
        </Box>
    );
};
