import * as React from 'react';

import {Box} from '@mui/material';
import Icon from '@mdi/react';

interface IWidgetSubtitleProps {
    icon: string;
    iconRotation?: number;
    units?: string;
    value: string;
}

export const WidgetSubtitle: React.FC<IWidgetSubtitleProps> = (props: IWidgetSubtitleProps) => {
    const renderUnits = (): React.ReactNode => {
        if (!props.units) {
            return null;
        }

        return (
            <Box sx={{
                fontSize: '12px',
                marginTop: '-4px',
                marginLeft: '2px',
            }}>
                {props.units}
            </Box>
        );
    };

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            margin: '8px',
            fontSize: '18px',
            lineHeight: '16px',
        }}>
            <Box sx={{marginRight: '4px'}}>
                <Icon
                    path={props.icon}
                    rotate={props.iconRotation}
                    size={'20px'}
                />
            </Box>
            <Box>{props.value}</Box>
            {renderUnits()}
        </Box>
    );
};
