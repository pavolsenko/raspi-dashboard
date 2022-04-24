import * as React from 'react';

import {Alert, Box} from '@mui/material';

import {useCrypto} from '../../hooks/useCrypto';
import {AppConfig} from '../../config/appConfig';
import {IWidgetProps} from '../../interfaces';
import {WidgetHeader} from '../WidgetHeader';
import {Loading} from '../Loading';
import {CurrentValue} from './CurrentValue';
import {CurrencyList} from './CurrencyList';

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
                <CurrentValue
                    currentValue={cryptoStats.currentValue}
                    previousValue={cryptoStats.previousValue}
                />
            </WidgetHeader>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                backgroundColor: '#f0f0f0',
                color: '#666666',
            }}>
                <CurrencyList currencies={cryptoStats.portfolio}/>
            </Box>
        </Box>
    );
};
