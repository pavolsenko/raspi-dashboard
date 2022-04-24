import * as React from 'react';

import {Box} from '@mui/material';
import Icon from '@mdi/react';
import {mdiArrowDown, mdiArrowUp} from '@mdi/js';

interface ICurrentValueProps {
    currentValue: number;
    previousValue: number;
}

export const CurrentValue: React.FC<ICurrentValueProps> = (props: ICurrentValueProps) => {
    const renderArrow = (): React.ReactNode => {
        if (props.currentValue < props.previousValue) {
            return <Icon path={mdiArrowDown} size={'60px'}/>
        }

        return <Icon path={mdiArrowUp} size={' 60px'}/>
    };

    return (
        <>
            <Box sx={{marginTop: '12px'}}>{renderArrow()}</Box>
            <Box sx={{fontSize: '60px'}}>{Math.floor(props.currentValue)}</Box>
            <Box sx={{
                fontSize: '24px',
                paddingTop: '12px',
            }}>
                {(props.currentValue % 1).toString().substring(2, 4) || '00'}
                <Box sx={{
                    fontSize: '26px',
                    marginTop: '-10px',
                    marginLeft: '6px',
                }}>
                    €
            </Box>
            </Box>
        </>
    );
};
