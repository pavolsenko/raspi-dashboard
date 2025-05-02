import { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import { mdiArrowDown, mdiArrowUp } from '@mdi/js';
import Icon from '@mdi/react';
import { DEFAULT_FONT_SECONDARY_SIZE } from '../../helpers/themeHelper';
import { cryptoIconStyles } from './styles';

export interface CryptoValueProps {
    title?: string;
    value: number;
    icon?: ReactNode;
    trend: 'up' | 'down';
}

export function CryptoValue(props: CryptoValueProps) {
    function renderTrend(): ReactNode {
        if (props.trend === 'up') {
            return (
                <Icon path={mdiArrowDown} size={DEFAULT_FONT_SECONDARY_SIZE} />
            );
        }

        return <Icon path={mdiArrowUp} size={DEFAULT_FONT_SECONDARY_SIZE} />;
    }

    function renderTitle(): ReactNode {
        if (props.icon) {
            return (
                <Box sx={cryptoIconStyles} component={'p'}>
                    {props.icon || props.title}
                </Box>
            );
        }

        return props.title;
    }

    return (
        <Box>
            <Typography variant={'body2'}>
                {renderTitle()} {renderTrend()} €{props.value.toFixed(2)}
            </Typography>
        </Box>
    );
}
