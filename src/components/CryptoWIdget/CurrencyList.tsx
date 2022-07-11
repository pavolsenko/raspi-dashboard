import * as React from 'react';

import {Box} from '@mui/material';

import {ICurrency} from '../../hooks/useCrypto';
import {CURRENCY_THRESHOLD} from '../../config/cryptoConfig';
import {CurrencyListItem} from './CurrencyListItem';

interface ICurrencyListProps {
    currencies: ICurrency[];
}

export const CurrencyList: React.FC<ICurrencyListProps> = (props: ICurrencyListProps) => {
    let counter = 0;
    let currencyRestValue = 0;

    const renderCurrencies = (): React.ReactNode[] => {
        const result: React.ReactNode[] = [];

        props.currencies.forEach((currency: ICurrency) => {
            if (!currency || !currency.totalValueInEur) {
                return;
            }

            if (currency?.totalValueInEur < CURRENCY_THRESHOLD) {
                counter++;
                currencyRestValue = currencyRestValue + currency.totalValueInEur;
                return;
            }

            result.push(
                <CurrencyListItem
                    key={currency.symbol}
                    currency={currency}
                />
            );
        });

        return result;
    };

    return (
        <>
            {renderCurrencies()}
            <Box sx={{
                textAlign: 'center',
                marginTop: '16px',
            }}>
                +{counter} more (€ {currencyRestValue.toFixed(2)})
            </Box>
        </>
    );
};
