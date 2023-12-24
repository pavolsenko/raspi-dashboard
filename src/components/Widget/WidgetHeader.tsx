import * as React from 'react';

import {Box} from '@mui/material';

interface IWidgetHeaderProps extends React.PropsWithChildren<any> {
    align?: 'left' | 'center' | 'right';
    backgroundColor: string;
    subtitle?: string;
    title: string;
}

export const WidgetHeader: React.FC<IWidgetHeaderProps> = (props:IWidgetHeaderProps) => {
    return (
        <Box sx={{
            width: '100%',
            backgroundColor: props.backgroundColor,
            color: '#ffffff',
            height: '165px',
        }}>
            <Box sx={{margin: '16px 16px 0 16px', textAlign: props.align}}>
                <Box>
                    <Box sx={{fontSize: '24px', lineHeight: '22px'}}>{props.title}</Box>
                    <Box sx={{fontSize: '12px'}}>{props.subtitle}</Box>
                </Box>
            </Box>

            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
            }}>
                {props.children}
            </Box>
        </Box>
    );
};
