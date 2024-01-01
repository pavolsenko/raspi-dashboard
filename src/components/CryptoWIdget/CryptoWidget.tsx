import * as React from 'react';

import {Box} from '@mui/material';

import {useCrypto} from '../../hooks/useCrypto';
import {AppConfig} from '../../config/appConfig';
import {IWidgetProps} from '../../interfaces';
import {WidgetHeader} from '../Widget/WidgetHeader';
import {Loading} from '../Widget/Loading';
import {CurrentValue} from './CurrentValue';
import {CurrencyList} from './CurrencyList';
import {Widget} from "../Widget/Widget";
import {Error} from "../Widget/Error";

export function CryptoWidget(props: IWidgetProps) {
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

    function renderCurrencyList() {
        if (isError) {
            return <Error/>;
        }

        return <CurrencyList currencies={cryptoStats.portfolio}/>;
    }

    return (
        <Widget>
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
                {renderCurrencyList()}
            </Box>
        </Widget>
    );
}
