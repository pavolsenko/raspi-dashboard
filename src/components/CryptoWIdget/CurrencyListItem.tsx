import * as React from 'react';

import {Box} from '@mui/material';

import {ICurrency} from '../../hooks/useCrypto';

interface ICurrencyListItemProps {
    currency: ICurrency;
}

export const CurrencyListItem: React.FC<ICurrencyListItemProps> = (props: ICurrencyListItemProps) => {
    return (
        <Box sx={{
            margin: '0 16px',
            borderBottom: '1px solid #cccccc',
            padding: '8px 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <Box>
                <Box sx={{
                    fontSize: '22px',
                    display: 'flex',
                }}>
                    {props.currency.name}
                </Box>

                <Box sx={{
                    color: '#999999',
                    fontSize: '14px',
                }}>
                    {props.currency.symbol}&nbsp;&nbsp;
                    {props.currency.count?.toFixed(2)}&nbsp;
                    € {props.currency.priceInEur?.toFixed(2)}
                </Box>
            </Box>

            <Box sx={{display: 'flex'}}>
                <Box sx={{fontSize: '36px'}}>
                    {props.currency.totalValueInEur?.toFixed()}
                </Box>

                <Box sx={{
                    fontSize: '12px',
                    marginLeft: '4px',
                    marginTop: '8px',
                }}>
                    <Box>
                        {((props.currency.totalValueInEur || 0) % 1).toString().substring(2, 4) || '00'}
                    </Box>

                    <Box sx={{
                        fontSize: '14px',
                        marginTop: '-4px',
                        marginLeft: '2px',
                    }}>
                        €
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
