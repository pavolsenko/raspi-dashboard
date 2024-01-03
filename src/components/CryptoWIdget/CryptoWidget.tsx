import { ReactNode, useEffect, useState } from 'react';

import { Box } from '@mui/material';

import { useCrypto } from '../../hooks/useCrypto';
import { AppConfig } from '../../config/appConfig';
import { WidgetHeader } from '../Widget/WidgetHeader';
import { CurrentValue } from './CurrentValue';
import { CurrencyList } from './CurrencyList';
import { Error } from '../Widget/Error';
import { IWidgetProps, Widget } from '../Widget/Widget';

import { cryptoWidgetStyles } from './styles';

export function CryptoWidget(props: IWidgetProps) {
    const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);

    const {
        isError,
        cryptoStats,
        loadCryptoStats,
    } = useCrypto();

    useEffect(() => {
        if (isInitialLoad) {
            loadCryptoStats();
            setIsInitialLoad(false);
        }

        const interval = setInterval(
            loadCryptoStats,
            AppConfig.defaultUpdateInterval,
        );

        return () => clearInterval(interval);
    }, [loadCryptoStats, isInitialLoad, setIsInitialLoad]);


    function renderCurrencyList(): ReactNode {
        if (isError) {
            return <Error/>;
        }

        return <CurrencyList currencies={cryptoStats.portfolio}/>;
    }

    return (
        <Widget>
            <WidgetHeader
                title="CoinStats"
                subtitle="Crypto portfolio"
                backgroundColor={props.headerBackgroundColor}
            >
                <CurrentValue
                    currentValue={cryptoStats.currentValue}
                    previousValue={cryptoStats.previousValue}
                />
            </WidgetHeader>

            <Box sx={cryptoWidgetStyles}>
                {renderCurrencyList()}
            </Box>
        </Widget>
    );
}
