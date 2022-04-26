import * as React from 'react';

import {Box} from '@mui/material';

import {Time} from './Time';

interface IWidgetHeaderProps extends React.PropsWithChildren<any> {
    title: string;
    subtitle: string;
    backgroundColor: string;
}

export const WidgetHeader: React.FC<IWidgetHeaderProps> = (props:IWidgetHeaderProps) => {
    return (
        <Box sx={{
            width: '100%',
            backgroundColor: props.backgroundColor,
            color: '#ffffff',
            height: '165px',
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: '16px 16px 0 16px',
            }}>
                <Box>
                    <Box sx={{fontSize: '26px', lineHeight: '22px'}}>{props.title}</Box>
                    <Box sx={{fontSize: '14px'}}>{props.subtitle}</Box>
                </Box>
                <Time/>
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
