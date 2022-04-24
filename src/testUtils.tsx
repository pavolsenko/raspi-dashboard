import * as React from 'react';

import {createTheme, ThemeProvider} from '@mui/material';

export const WrapperTestComponent: React.FC<React.PropsWithChildren<any>> = (props: React.PropsWithChildren<any>) => {
    return (
        <ThemeProvider theme={createTheme()}>
            {props.children}
        </ThemeProvider>
    );
};
