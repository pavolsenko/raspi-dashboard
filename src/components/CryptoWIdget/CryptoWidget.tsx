import * as React from 'react';

import {Alert, Box} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import {useCrypto} from './hooks/useCrypto';
import {AppConfig} from '../../config/appConfig';
import {IWidgetProps} from '../../interfaces';
import {WidgetHeader} from '../WidgetHeader';
import {Loading} from '../Loading';

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
            <Loading/>
        );
    }

    if (isError) {
        return (
            <Alert severity={'error'}>Sorry, something went wrong</Alert>
        );
    }

    const renderArrow = (): React.ReactNode => {
        if (cryptoStats.currentValue < cryptoStats.previousValue) {
            return <ArrowDownwardIcon fontSize={'inherit'}/>
        }

        return <ArrowUpwardIcon fontSize={'inherit'}/>
    };

    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <WidgetHeader
                title={'CoinStats'}
                subtitle={'Crypto portfolio'}
                backgroundColor={props.headerBackgroundColor}
            >
                <Box sx={{marginTop: '8px', fontSize: '60px'}}>{renderArrow()}</Box>
                <Box sx={{fontSize: '60px'}}>{Math.floor(cryptoStats.currentValue)}</Box>
                <Box sx={{
                    fontSize: '24px',
                    paddingTop: '12px',
                }}>
                    {(cryptoStats.currentValue % 1).toString().substring(2, 4) || '00'}
                    <Box sx={{
                        fontSize: '26px',
                        marginTop: '-10px',
                        marginLeft: '6px',
                    }}>
                        €
                    </Box>
                </Box>
            </WidgetHeader>

            <Box sx={{
                display: 'flex',
                flexGrow: '1',
                justifyContent: 'space-between',
                backgroundColor: '#f0f0f0',
            }}>

            </Box>
        </Box>
    );
};
