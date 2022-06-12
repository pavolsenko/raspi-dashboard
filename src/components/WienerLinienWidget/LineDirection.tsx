import * as React from 'react';
import {Box} from '@mui/material';
import Icon from '@mdi/react';
import {mdiArrowRight} from '@mdi/js';

interface ILineDirectionProps {
    direction: string;
}

export const LineDirection: React.FC<ILineDirectionProps> = (props: ILineDirectionProps) => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
        }}>
            <Box sx={{margin: '4px 4px 0 4px'}}>
                <Icon
                    path={mdiArrowRight }
                    size={'18px'}
                />
            </Box>
            {props.direction}
        </Box>
    );
};
