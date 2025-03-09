import * as React from 'react';

import { Box } from '@mui/material';

import {
    CURRENCY_MAX_COUNT,
    CURRENCY_VALUE_THRESHOLD,
} from '../../config/cryptoConfig';
import { CurrencyListItem } from './CurrencyListItem';
import { ICurrency } from '../../interfaces';

interface ICurrencyListProps {
    currencies: ICurrency[];
}

export const CurrencyList: React.FC<ICurrencyListProps> = (
    props: ICurrencyListProps,
) => {
    let counter = 0;
    let valueCounter = 0;
    let currencyRestValue = 0;

    const renderCurrencies = (): React.ReactNode[] => {
        const result: React.ReactNode[] = [];

        props.currencies.forEach((currency: ICurrency) => {
            if (!currency || !currency.totalValueInEur) {
                return;
            }

            counter++;

            if (
                currency?.totalValueInEur < CURRENCY_VALUE_THRESHOLD ||
                counter > CURRENCY_MAX_COUNT
            ) {
                valueCounter++;
                currencyRestValue =
                    currencyRestValue + currency.totalValueInEur;
                return;
            }

            result.push(
                <CurrencyListItem key={currency.symbol} currency={currency} />,
            );
        });

        return result;
    };

    return (
        <>
            {renderCurrencies()}
            <Box
                sx={{
                    textAlign: 'center',
                    marginTop: '16px',
                }}
            >
                +{valueCounter} more (€ {currencyRestValue.toFixed(2)})
            </Box>
        </>
    );
};
