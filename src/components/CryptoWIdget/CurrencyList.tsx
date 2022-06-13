import * as React from 'react';

import {Box} from '@mui/material';

import {ICurrency} from '../../hooks/useCrypto';

interface ICurrencyListProps {
    currencies: ICurrency[];
}

const CURRENCY_THRESHOLD = 10;

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
                <Box
                    key={currency.symbol}
                    sx={{
                        margin: '0 16px',
                        borderBottom: '1px solid #cccccc',
                        padding: '8px 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '22px',
                    }}
                >
                    <Box>
                        {currency.name} ({currency.symbol})
                    </Box>

                    <Box>
                        € {currency.totalValueInEur?.toFixed(2)}
                    </Box>
                </Box>
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
